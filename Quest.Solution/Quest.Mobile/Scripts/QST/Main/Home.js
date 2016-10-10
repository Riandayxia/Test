/**-----------------------------------------------------------------
* @explanation:主界面菜单
* @created：Rainday
* @create time：2015/1/27 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Main.Home', {
    extend: 'Ext.Container',
    xtype: 'main_home',
    requires: ['QST.Main.HomeTopImg','QST.Main.Menu'],
    config: {
        title: '城南花园',
        layout: 'vbox',
        items: [
            {
                xtype: 'home_topImg',
                height:160
            }, {
                xtype: 'main_menu',
                //height: 160
            }, {
                xtype: 'panel',
                height: 60,
                html:'贴心服务'
            }, {
                xtype: 'panel',
                height: 100,
                html: '物业管家'
            }, {
                xtype: 'panel',
                height: 60,
                html: '其他'
            }
        ]
    },
    //layout: 'vbox',
    //初始化
    constructor: function (cfg) {
        var me = this;
        this.callParent(arguments);
        //加载头部
        me.add(this.getHeaderBar());
    },
    //获得头部
    getHeaderBar: function () {
        var me = this;
        if (!this._headerBar) {
            this._headerBar = Ext.create("app.user.NavigationBar", {
                title: me._title,
                docked: 'top',
                items: [{
                    action: 'Back',
                    cls: 'nbutton',
                    align: 'left',
                    text:'地区',
                    handler: function (but) {
                        me.fireEvent('Back', but, me);
                    }
                }]
            });
        }
        return this._headerBar;
    }
});
