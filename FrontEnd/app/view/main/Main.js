/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */


Ext.define('AppName.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'AppName.view.main.MainController',
        'AppName.view.main.MainModel',
        'AppName.store.Users',
        'AppName.view.user.UserController'


    ],

    xtype: 'app-main',
    plugins: 'viewport',
    controller: 'main',

    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        buttons: ['->', {
            text: 'Logout',
            handler: 'onClickButton'
        }],
        tbar: [{
            xtype: 'button',
            text: 'Next Page',
            handler: 'onClickNext'


        }]
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'Users',
            xtype: 'user-list'
        }]
    }]
});