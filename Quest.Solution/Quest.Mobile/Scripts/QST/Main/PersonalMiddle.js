﻿Ext.define('QST.Main.PersonalMiddle', {
    extend: 'Ext.Container',
    xtype: 'personal_middle',
    alternateClassName: 'personal',
    config: {
        layout: 'vbox',
        defaults: {
            layout: 'hbox',
            defaults: {
                flex: 1,
                xtype: 'label',
                iconAlign: 'top',
                style: 'margin-left:.5em;',
            }
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                cls: 'personalBar',
                defaults: {
                    xtype: 'label',
                },
                items: [{
                    align: 'left',
                    html: '我的订单'
                }, {
                    align: 'right',
                    html: '查看全部订单<img class="personalArrow" fire="onDelete" src="resources/images/Arrow.png">'
                }]
            },
            {
                layout: 'vbox',
                cls: 'personalOrder',
                defaults: {
                    layout: 'hbox',
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
                                text: '待付款',
                                iconCls: 'htgl'
                            }, {
                                text: '待发货',
                                iconCls: 'htgl'
                            }, {
                                text: '待收货',
                                iconCls: 'htgl'
                            }, {
                                text: '待评论',
                                iconCls: 'htgl'
                            }, {
                                text: '退款/售后',
                                iconCls: 'htgl'
                            }
                       ]
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