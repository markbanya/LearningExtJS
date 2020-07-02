Ext.define('AppName.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'AppName.model.User',
    data: [{
            name: 'Lisa',
            phone: '555-111-1224'
        },
        {
            name: 'Bart',
            phone: '555-222-1234'
        },
        {
            name: 'Homer',
            phone: '555-222-1244'
        },
        {
            name: 'Marge',
            phone: '555-222-1254'
        }
    ]
});