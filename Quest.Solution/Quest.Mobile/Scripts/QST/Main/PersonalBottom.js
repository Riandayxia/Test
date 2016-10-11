Ext.define('QST.Main.PersonalBottom', {
    extend: 'Ext.Container',
    xtype: 'personal_bottom',
    alternateClassName: 'personal',
    config: {
        layout: 'vbox',
        cls: 'home',
        style: 'border: 2px solid red;margin: 5px 15px;',
        defaults: {
            layout: 'hbox',
            defaults: {
                flex: 1,
                xtype: 'button',
                iconAlign: 'top',
            }
        },
        items: [
            {
                items: [{
                    text: '房产绑定',
                    iconCls: 'htgl',
                }, {
                    text: '缴费记录',
                    iconCls: 'organize orange',
                }, {
                    text: '我的投诉',
                    iconCls: 'list roseRed',
                }]
            },
            {
                items: [{
                    text: '我的工单',
                    iconCls: 'search green',
                }, {
                    text: '我的评论',
                    iconCls: 'add blue',
                }, {
                    text: '我的投资',
                    iconCls: 'star yellow',
                }]
            },
        ],
        listeners: {
        }
    },
    //初始化
    constructor: function (cfg) {
        var me = this;
        this.callParent(arguments);
        
    }
})