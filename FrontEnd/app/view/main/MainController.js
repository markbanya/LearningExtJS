/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AppName.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'AppName.store.Users'

    ],

    alias: 'controller.main',


    onClickButton: function() {

        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');

    },
    onClickNext: function() {

        // Remove the localStorage key/value


        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('landing-page');

    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    },
    click: function() {
        // this == the button, as we are in the local scope
        this.setText('I was clicked!');
    },
    mouseover: function() {
        // set a new config which says we moused over, if not already set
        if (!this.mousedOver) {
            this.mousedOver = true;
            alert('You moused over a button!\n\nI wont do this again.');
        }
    }

});

Ext.define('UserListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userlist',

    //init: function(view) {
    // this.userCount = 0;
    //var users = [],
    //    i;

    //  for (i = 0; i < 5; ++i) {
    //     users.push(this.getUser());
    //  }
    //  view.getStore().add(users);
    //  },

    onAddClick: function() {
        var view = this.getView(),
            rec = new AppName.model.User({
                name: '',
                phone: ''

            });

        view.store.insert(0, rec);
        view.findPlugin('cellediting').startEdit(rec, 0);
    },

    onDeleteClick: function() {
        var view = this.getView(),
            selected = view.getSelectionModel().getSelection()[0],
            store = view.getStore();


        store.remove(selected);
    },

    onSelectionChange: function(selModel, selections) {
        this.lookupReference('delete').setDisabled(selections.length === 0);
    },

    getUser: function() {
        ++this.userCount;
        return {
            name: 'User ' + this.userCount,
            phone: this.generatePhone()
        };
    },

    addUser: function() {
        this.getView().getStore().add(this.getUser());
    },

    generatePhone: function() {
        var num = '',
            i;

        for (i = 0; i < 7; ++i) {
            num += Ext.Number.randomInt(0, 9);
            if (num.length === 3) {
                num += '-';
            }
        }
        return num;
    }
});