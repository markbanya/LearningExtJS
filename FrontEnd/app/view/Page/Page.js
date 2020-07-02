Ext.define('AppName.view.page.Page', {
    extend: 'Ext.container.Viewport',
    requires: [

        'AppName.store.Retail'


    ],
    xtype: 'landing-page',
    layout: 'border',
    controller: 'page',
    items: [{
        region: 'north',
        html: '<h1 class="x-panel-header">Learning</h1>',
        border: true,
        margin: '0 0 5 0',
        buttons: ['->', {
            text: 'Back',
            handler: 'onClickBack'

        }]

    }, {
        region: 'west',
        collapsible: true,
        title: 'Navigation',
        width: 200,
        split: true,
        items: [{
                    xtype: 'grid',

                    id: 'membergrid',
                    store: Ext.create('AppName.store.Retail'),
                    selModel: {
                        type: 'rowmodel',
                        listeners: {
                            selectionchange: 'onSelectionChange'
                        }
                    },
                    columns: [{
                            text: 'Retail',
                            dataIndex: 'retail',
                            width: 100
                        },
                        {
                            text: 'Category',
                            dataIndex: 'category',
                            width: 100
                        }
                    ],

                    height: 300,
                    layout: 'fit',
                    fullscreen: true

                },

                {
                    xtype: 'button',
                    reference: 'delete',
                    text: 'Delete',
                    listeners: {
                        click: 'onDeleteClick'
                    }
                }
            ] // could use a TreePanel or AccordionLayout for navigational items
    }, {
        region: 'south',
        title: 'South Panel',
        collapsible: true,
        html: 'Information goes here',
        split: true,
        height: 100,
        minHeight: 100
    }, {
        region: 'east',
        title: 'Details',
        collapsible: true,
        split: true,
        width: 180,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Retail',
            name: 'retail',

            id: 'retail',
            editable: false
        }, {

            fieldLabel: 'Category',
            name: 'Category',
            id: 'category',
            xtype: 'textarea',
            editable: false


        }, {
            xtype: 'numberfield',
            fieldLabel: 'Number Field',
            name: 'numberField',
            id: 'numberField',
            editable: false

        }]
    }, {
        region: 'center',
        xtype: 'tabpanel', // TabPanel itself has no title
        plain: true,
        activeTab: 0,
        //height:335,
        defaults: {
            bodyStyle: 'padding:10px'
        },
        items: [{
            title: 'General',
            xtype: 'form',
            layout: 'form',
            width: 300,
            //defaultType: 'textfield',

            items: [{
                    fieldLabel: 'Retail',
                    name: 'retail',
                    xtype: 'textfield',
                    width: 280,
                    allowBlank: false
                }, {
                    fieldLabel: 'Category',
                    name: 'category',
                    xtype: 'textarea',
                    height: 200,
                    width: 280,
                    allowBlank: false
                }, {
                    fieldLabel: 'Number Field',
                    name: 'number',
                    xtype: 'numberfield',
                    width: 80,
                    allowBlank: false
                },
                {
                    xtype: 'button',
                    text: 'Ok',
                    listeners: {
                        click: 'addItem'
                    }

                }
            ]
        }]
    }]
});