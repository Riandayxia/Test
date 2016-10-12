/**-----------------------------------------------------------------
* @explanation:主界面菜单
* @created：Rainday
* @create time：2015/1/27 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Main.HomeMenu', {
    extend: 'Ext.Container',
    xtype: 'home_menu',
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
                    text: '在线缴费',
                    iconCls: 'htgl',
                    handler: function (but) {
                        util.redirectTo("QST.Property.Payment.Layout", "", { parentUrl: "QST.Main.Layout" });
                    }
                }, {
                    text: '社区资讯',
                    iconCls: 'organize orange',
                    handler: function (but) {
                        util.redirectTo("QST.Property.Community.Layout", "", { parentUrl: "QST.Main.Layout" });
                    }
                }, {
                    text: '家政服务',
                    iconCls: 'list roseRed',
                    handler: function (but) {
                        util.redirectTo("QST.HouseManage.Housekeeping.List", "", { parentUrl: "QST.Main.Layout" });
                    }
                }, {
                    text: '便民服务',
                    iconCls: 'refresh lightBlue',
                }]
            },
            {
                items: [{
                    text: '投诉建议',
                    iconCls: 'search green',
                    handler: function (but) {
                        util.redirectTo("QST.Property.Complaints.Edit", "", { parentUrl: "QST.Main.Layout" });
                    }
                }, {
                    text: '报事报修',
                    iconCls: 'settings blue',
                    handler: function (but) {
                        util.redirectTo("QST.Property.NewsPaper.Edit", "", { parentUrl: "QST.Main.Layout" });
                    }
                }, {
                    text: '在线营业厅',
                    iconCls: 'star yellow',
                }, {
                    text: '在线看直播',
                    iconCls: 'trash paleYellow',
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
});
