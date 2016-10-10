/**-----------------------------------------------------------------
* @explanation:主界面菜单
* @created：Rainday
* @create time：2015/1/27 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Main.Menu', {
    extend: 'Ext.Container',
    xtype: 'main_menu',
    config: {
        layout: 'vbox',
        cls: 'home',
        style: 'margin: 5px 15px;',
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
                    text: '在线缴费',
                    iconCls: 'htgl',
                }, {
                    text: '社区资讯',
                    iconCls: 'organize orange',
                }, {
                    text: '家政服务',
                    iconCls: 'list roseRed',
                }, {
                    text: '便民服务',
                    iconCls: 'refresh lightBlue',
                }]
            },
            {
                items: [{
                    text: '投诉建议',
                    iconCls: 'search green',
                }, {
                    text: '报事报修',
                    iconCls: 'settings blue',
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
