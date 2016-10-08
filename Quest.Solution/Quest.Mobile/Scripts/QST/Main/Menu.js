/**-----------------------------------------------------------------
* @explanation:主界面菜单
* @created：Rainday
* @create time：2015/1/27 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Main.Menu', {
    extend: 'Ext.Container',
    xtype: 'main_menu',
    requires: ['QST.Main.TopImg', 'QST.Main.Projects'],
    config: {
        id: 'QST_Main_Menu',
        title: config.string.MenuTitle,
        layout: 'vbox',
        listMenu: [
            { text: '项目切换', action: 'MenuSwitch', redirect: 'QST.Main.Projects' },
            //{ text: '头图管理', action: 'MenuSwitch', redirect: 'QST.Main.WorkAreaPM' },
            { text: '添加工作区', action: 'MenuSwitch', redirect: 'QST.App.Systems.MenuUser.Edit' },
            { text: '加入工作区', action: 'setTitle' },
            { text: '工作区管理', action: 'MenuSwitch', redirect: 'QST.App.Systems.MenuUser.List' },
        ],
        listeners: {
            MenuSwitch: function (but, list) {
                this.getStructureMenu().hide();
                util.redirectTo(but.config.redirect, "", { parentUrl: "QST.Main.Layout" });
            },
            // 选择工作区
            setTitle: function () {
                var me = this;
                me.getStructureMenu().hide();

                me.getField().show();
            }
        }
    },
    // 加载菜单
    loadMenu: function () {
        var me = this;
        var pInfo = Ext.decode(util.storeGet("projectInfo"));
        config.project = pInfo;
        me._homeHeaderBar.setTitle(pInfo.pName);
        var menuData = QSTUtil.loadMenu('root', function (but) {
            me.menuTapButton(but.config.tobj);
        });
        //设置菜单
        me.setItems(menuData);
    },
    //主界面到此界面时加载[List刷新时会默认加载此方法]
    rendering: function (params) {
        this.loadMenu();
    },
    //初始化
    constructor: function (cfg) {
        var me = this;
        this.callParent(arguments);
        //加载头部菜单信息f
        me.add(me.getHeader());
        //me.loadMenu();
    },
    //头部菜单信息(private)
    getHeader: function () {
        var me = this;
        if (!this._homeHeaderBar) {
            this._homeHeaderBar = Ext.create("app.user.NavigationBar", {
                title: config.project.pName,
                docked: 'top',
                items: [
                {
                    xtype: 'button',
                    iconCls: 'more',
                    cls: 'nbutton',
                    style: 'font-size:1em;',
                    align: 'right',
                    handler: function (but) {
                        me.setStructureMenu(me.config.listMenu);
                    }
                }]
            });
        }
        return this._homeHeaderBar;
    },
    // 菜单点击事件处理
    menuTapButton: function (tobj) {
        util.redirectTo('QST.Main.ChildMenu', "", { parentUrl: "QST.Main.Layout", rootMenu: tobj });
        //util.redirectTo('QST.App.CostManage.Borrow.Edit', "", { parentUrl: "QST.Main.Layout", rootMenu: tobj });
    },
    //设置菜单
    setStructureMenu: function (items) {
        var me = this;
        if (items && items.toString() != "") {
            var menuItems = [];
            for (var i = 0; i < items.length; i++) {
                menuItems.push({
                    xtype: 'button',
                    text: items[i].text,
                    redirect: items[i].redirect,
                    cls: items[i].cls,
                    action: items[i].action,
                    handler: function (but) {
                        me.fireEvent(but.config.action, but, me);
                    }
                });
            }
            this.getStructureMenu().setItems(menuItems);
            this.getStructureMenu().show();
            me._tapHold = true
        } else
            me._tapHold = false
    },
    //加载功能
    getStructureMenu: function () {
        var me = this;
        if (!me._menuPanel) {
            me._menuPanel = Ext.create('Ext.Panel', {
                modal: true,
                bottom: 0,
                width: '100%',
                cls: 'menus',
                hideOnMaskTap: true,
                centered: true,
                layout: 'vbox',
                showAnimation: {
                    type: 'popIn',
                    duration: 250,
                    easing: 'ease-out'
                },
                hideAnimation: {
                    type: 'popOut',
                    duration: 250,
                    easing: 'ease-out'
                },
                listeners: {
                    hide: function () { me._tapHold = false }
                }
            });
            Ext.Viewport.add(me._menuPanel);
        }
        return me._menuPanel;
    },
    //加载工作区
    getField: function (data) {
        var me = this;
        me._OperatingmenuPanel = Ext.create('Ext.Panel', {
            modal: true,
            width: '90%',
            height: '80%',
            centered: true,
            hideOnMaskTap: true,
            items: [
                {
                    docked: 'top',
                    xtype: 'navigationbar',
                    html: '工作区列表',
                    cls: 'vEdit',
                },
                {
                    xtype: 'panel',
                    height: '100%',
                    layout: 'fit',
                    items: [{
                        xtype: 'list',
                        itemTpl: Ext.create('Ext.XTemplate',
                            '<div class="container">',
                                '<div class="header" >',
                                '</div>',
                                 '<div class="menu">{[QSTUtil.IconStyle(values.IconClass)]}</div>',
                                '<div class="menu" style="margin: 12px 10px 0px;">{MenuName}</div>',
                                '<div class="content" style="margin: 15px 10px 0px;">{[QSTUtil.DicGetUser(values.UserId)]}</div>',
                                '<div class="footer"></div>',
                            '</div>'),
                        store: {
                            fields: ['MenuName', 'IconClass', 'Id', 'UserId'],
                            //data: data
                        },
                        //监听点击列表某一项后所执行的方法
                        listeners: {
                            painted: function (element, eOpts) {
                                var me = this;
                                Ext.Ajax.request({
                                    url: config.url + '/MenuUser/GetAlls?CName=root',
                                    params: { projectId: config.project.pId },
                                    success: function (response) {
                                        var rdata = Ext.decode(response.responseText);
                                        if (rdata.success) {
                                            me.setData(rdata.data);
                                        }
                                    }
                                });
                            },
                            itemtap: function (view, index, target, record, e, eOpts) {
                                var data = {};
                                Ext.apply(data, {
                                    MenuId: record.data.Id,
                                    UserId: Ext.JSON.decode(util.storeGet("logininfor")).Id
                                });
                                Ext.Ajax.request({
                                    url: config.url + '/UserMenu/Add',
                                    async: false,
                                    params: data,
                                    success: function (response) {
                                        var result = Ext.decode(response.responseText);
                                        setTimeout(function () { me.loadMenu(); });
                                    }
                                })
                            }
                        },
                    }]
                }
            ]
        });
        Ext.Viewport.add(me._OperatingmenuPanel);
        return me._OperatingmenuPanel;
    }
});
