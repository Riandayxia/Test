/**-----------------------------------------------------------------
* @explanation:便民服务
* @created：Rainday
* @create time：2015/1/27 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Property.Convenience.Top', {
    extend: 'Ext.Container',
    xtype: 'property_convenience_top',
    config: {
        layout: 'vbox',
        cls: 'home',
        style: 'margin: 5px 15px;',
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
                items: [{
                    text: '公租房政策信息',
                    iconCls: 'htgl',
                    handler: function (but) {
                        util.redirectTo("QST.Property.Payment.Layout", "", { parentUrl: "QST.Main.Layout" });
                    }
                }, {
                    text: '医院',
                    iconCls: 'organize orange',
                    handler: function (but) {
                        util.redirectTo("QST.Property.Community.Layout", "", { parentUrl: "QST.Main.Layout" });
                    }
                }, {
                    text: '学校',
                    iconCls: 'list roseRed',
                }]
            },
            {
                items: [{
                    text: '餐厅',
                    iconCls: 'search green',
                    handler: function (but) {
                        util.redirectTo("QST.Property.Complaints.Edit", "", { parentUrl: "QST.Main.Layout" });
                    }
                }, {
                    text: '公安局',
                    iconCls: 'settings blue',
                    handler: function (but) {
                        util.redirectTo("QST.Property.NewsPaper.Edit", "", { parentUrl: "QST.Main.Layout" });
                    }
                }, {
                    text: '政府',
                    iconCls: 'star yellow',
                }]
            }
        ],
        listeners: {
        }
    },
    //初始化
    constructor: function (cfg) {
        var me = this;
        this.callParent(arguments);
    }
});
