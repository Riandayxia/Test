/**-----------------------------------------------------------------
* @explanation:主界面菜单
* @created：Rainday
* @create time：2015/1/27 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Main.Home', {
    extend: 'Ext.Container',
    xtype: 'main_home',
    requires: ['QST.Main.HomeTopImg', 'QST.Main.Menu', 'QST.Main.MiddleImg'],
    fullscreen: true,
    config: {
        title: '城南花园',
        layout: 'vbox',
        scrollable: {
            directionLock: true
        },
        items: [
            {
                xtype: 'home_topImg',
                height: 160
            }, {
                xtype: 'main_menu',
            }, {
                xtype: 'middleimg'
            }, {
                xtype: 'panel',
                cls: 'home_msg',
                height: 60,
                html: '限时抢购推荐'
            }, {
                xtype: 'panel',
                cls: 'home_msg',
                height: 60,
                html: '限时抢购推荐'
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
                    text: '地区',
                    handler: function (but) {
                        me.fireEvent('Back', but, me);
                    }
                }]
            });
        }
        return this._headerBar;
    }
});
