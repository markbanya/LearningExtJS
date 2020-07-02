Ext.define('AppName.view.main.User', {
    extend: 'Ext.grid.Panel',
    requires: [
        'AppName.store.Users'


    ],

    xtype: 'user-list',
    controller: 'userlist',
    tbar: [{
        text: 'Add',
        listeners: {
            click: 'onAddClick'
        }
    }, {
        text: 'Delete',
        reference: 'delete',
        listeners: {
            click: 'onDeleteClick'
        }
    }],
    store: Ext.create('AppName.store.Users'),
    selModel: {
        type: 'rowmodel',
        listeners: {
            selectionchange: 'onSelectionChange'
        }
    },

    columns: [{
        flex: 1,
        dataIndex: 'name',
        text: 'Name',
        editor: 'textfield'
    }, {
        flex: 1,
        dataIndex: 'phone',
        text: 'Phone',
        editor: 'textfield'

    }],
    selModel: 'cellmodel',
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    }
})