Ext.define('AppName.store.Retail', {
    extend: 'Ext.data.Store',
    alias: 'store.retails',
    model: 'AppName.model.Retail',


    proxy: {
        type: 'ajax',
        url: 'https://localhost:44371/api/TodoItems/',
        reader: {
            type: 'json',
            retail: 'retail',
            category: 'category',
            number: 'number'
        }
    },
    autoLoad: true



    // data: [{
    //         'retail': 'Bilka',
    //         "category": "Absolut",
    //         'number': 1

    //     },
    //     {
    //         'retail': 'Bilka',
    //         "category": "Malibu",
    //         'number': 2

    //     },
    //     {
    //         'retail': 'Bilka',
    //         "category": "Lillet",
    //         'number': 4

    //     },
    //     {
    //         'retail': 'Fortex',
    //         "category": "Havana Club",
    //         'number': 5

    //     }
    //]
});