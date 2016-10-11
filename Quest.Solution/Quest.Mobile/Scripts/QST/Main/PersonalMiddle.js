Ext.define('QST.Main.PersonalMiddle', {
    extend: 'Ext.Container',
    xtype: 'personal_middle',
    alternateClassName: 'personal',
    config: {
        layout: 'vbox',
        style: 'border: 2px solid red;margin: 5px 15px;',
        defaults: {
            layout: 'hbox',
            defaults: {
                flex: 1,
                xtype: 'label',
                iconAlign: 'top',
            }
        },
        items: [
            {
                html: '我的订单'
            },
            {
                items: [
                    {
                        html: '待付款'
                    },
                    {
                        html: '待发货'
                    },
                    {
                        html: '待收货'
                    },
                    {
                        html: '待评论'
                    },
                    {
                        html: '退款/售后'
                    }
                ]
            }
        ]
    },
    //初始化
    constructor: function (cfg) {
        var me = this;
        this.callParent(arguments);

    }
})