Ext.define('AppName.view.page.PageController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.page',



    onClickBack: function() {

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('app-main');

    },
    addItem: function(button) {
        var form = button.up('form').getForm();

        // Validate the form
        if (form.isValid()) {
            var grid = Ext.getCmp('membergrid');
            var values = form.getFieldValues();
            grid.store.add({
                retail: values.retail,
                category: values.category,
                number: values.number
            });
            form.setValues({
                retail: '',
                category: '',
                number: ''
            });

            var selModel = grid.getSelectionModel();
            selModel.select(grid.store.getAt(grid.store.getCount() - 1));


            Ext.Ajax.request({
                url: 'https://localhost:44371/api/TodoItems/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                jsonData: {
                    "category": values.retail,
                    "retail": values.category,
                    'number': values.number
                },
                success: function(response) {
                    var jsonResp = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.alert("Info", "Added in API : " + jsonResp.category);
                },
                failure: function(response) {
                    var jsonResp = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.alert("Error", jsonResp.error);
                }
            });
            var panel = Ext.getCmp('eastPanel');
            panel.collapse();
        } else {} // do something else here
    },

    onDeleteClick: function(button) {
        var grid = Ext.getCmp('membergrid');

        var selection = grid.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            console.log(selection.id);
            grid.store.remove(selection);
            Ext.Ajax.request({
                url: 'https://localhost:44371/api/TodoItems/' + selection.id,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        }
    },
    onSelectionChange: function(selModel, selections) {
        this.lookupReference('delete').setDisabled(selections.length === 0);
        var grid = Ext.getCmp('membergrid');
        grid.getView().refresh();
        var select = grid.getView().getSelectionModel().getSelection()[0];

        if (select) {
            var categoryData = select.data.category;
            var retailData = select.data.retail;
            var numberData = select.data.number;


            var dC = Ext.getCmp('category').setValue(categoryData);
            var dR = Ext.getCmp('retail').setValue(retailData);
            var dn = Ext.getCmp('numberField').setRawValue(numberData);

        }
    },
    collapseForm: function() {
        var panel = Ext.getCmp('eastPanel');
        panel.expand();
    }
});