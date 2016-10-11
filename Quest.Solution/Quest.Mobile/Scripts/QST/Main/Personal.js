Ext.define('QST.Main.Personal', {
    extend: 'Ext.Container',
    xtype: 'personal',
    alternateClassName: 'personal',
    requires: ['QST.Main.PersonalTop', 'QST.Main.PersonalMiddle', 'QST.Main.PersonalBottom'],
    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'personal_top'
            },
            {
                xtype: 'panel',
                //scrollable: {
                //    directionLock: true
                //},
                items: [{
                    xtype: 'personal_middle'
                }, {
                    xtype: 'personal_bottom'
                }]
            }
        ]
    },
    //初始化
    constructor: function (cfg) {
        var me = this;
        this.callParent(arguments);

    }
})