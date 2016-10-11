Ext.define('QST.Main.PersonalTop', {
    extend: 'Ext.Container',
    xtype: 'personal_top',
    alternateClassName: 'personal',
    config: {
        layout: 'vbox',
        height: 250,
        cls: 'personal',
        defaults: {
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'top'
            },
            defaults: {
                flex: 1,
                xtype: 'button',
                iconAlign: 'top'
            }
        },
        items: [
        {
            items: [
                {
                    xtype: 'panel',
                }, {
                    flex: 6,
                    cls: 'myInfo',
                    iconCls: 'htgl',
                    text: '我的名称'
                }, {
                    iconCls: 'settings #eee'
                }
            ]
        },
        {
            style: 'margin-top:5em;background-color: rgb(52, 202, 236);;',
            items: [{
                iconCls: 'trash #eee',
                text: '我的优惠券'
            },
            {
                iconCls: 'maps #eee',
                text: '我的银行卡'
            },
            {
                iconCls: 'star #eee',
                text: '我的收藏'
            }]
        }]
    },
    //初始化
    constructor: function (cfg) {
        var me = this;
        this.callParent(arguments);
    }
})