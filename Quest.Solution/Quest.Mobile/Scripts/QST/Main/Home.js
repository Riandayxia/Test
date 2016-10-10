/**-----------------------------------------------------------------
* @explanation:主界面菜单
* @created：Rainday
* @create time：2015/1/27 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Main.Home', {
    extend: 'Ext.Container',
    xtype: 'main_home',
    requires: ['QST.Main.HomeTopImg', 'QST.Main.Menu'],
    config: {
        title: '城南花园',
        layout: 'vbox',
        items: [
            {
                xtype: 'home_topImg',
                height: 160
            }, {
                xtype: 'main_menu',
            }, {
                xtype: 'panel',
                height: 30,
                style: 'border: 1px solid #ECEAE9;padding: 5px;',
                html: '停电通知：2016-10-10 8：00至12：00'
            }, {
                xtype: 'panel',
                height: 50,
                html: '<img  class="middle_img" fire="onDelete" src="resources/images/middle_img.png">'
            }, {
                xtype: 'panel',
                layout: 'hbox',
                height: 100,
                margin: '5px 0px',
                items: [{
                    xtype: 'panel',
                    flex: 1,
                    html: '<img  class="middle_img_button" fire="onDelete" src="resources/images/middle_img_2.png">'
                }, {
                    html: '',
                    width: 5
                }, {
                    xtype: 'panel',
                    flex: 1,
                    html: '<img  class="middle_img_button" fire="onDelete" src="resources/images/middle_img_3.png">'
                }]
            }, {
                xtype: 'panel',
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
