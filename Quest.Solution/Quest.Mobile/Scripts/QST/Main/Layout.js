/**-----------------------------------------------------------------
* @explanation:主界面布局
* @created：Rainday
* @create time：2015/1/27 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Main.Layout', {
    extend: 'Ext.TabPanel',
    xtype: 'main_layout',
    id: 'QST_Main_Layout',
    requires: ['QST.Util', 'QST.Main.Home','QST.Main.Personal', 'QST.Main.Login'],
    config: {
        fullscreen: true,
        cls: 'navToolbarHone',
        tabBar: {
            docked: 'bottom',
            //高亮
            ui: 'light',
            layout: { //设置每个tab的位置为居中
                align: 'stretch'
            },
            defaults: {
                flex: 1,
                layout: 'card'
            },
            scrollable: { //设置可滚动的属性
                direction: 'vertical',
                indicators: false
            }
        },
        items: [{
            xtype: 'container',
            title: config.str.HomeArea,
            selected: true,
            iconCls: 'home',
            layout: 'card',
            id: 'c_main_home',
            items: [{
                xtype: 'main_home'
            }]
        }, {
            xtype: 'container',
            title: config.str.Wares,
            iconCls: 'star',
            layout: 'card',
            id: 'c_main_menu',
            items: [{
                xtype: 'userLogin',
            }]
        }, {
            xtype: 'container',
            title: config.str.Finance,
            iconCls: 'info',
            layout: 'card',
            id: 'c_main_infotab',
            items: [{
                xtype: 'panel',
            }]
        }, {
            xtype: 'container',
            title: config.str.MiArea,
            iconCls: 'settings',
            layout: 'card',
            id: 'c_main_personal',
            items: [{
                xtype: 'personal',
            }]
        }],
        listeners: {
            Back: function () {
                //退出程序
                if (this.isExit)
                    navigator.app.exitApp();
                this.isExit = true;
                util.showMessage(config.str.PressExitApp, true);
            },
            // 菜单切换
            activeitemchange: function (tabBar, newTab, oldTab) {
                var tab = newTab.tab;
                newTab.badgeText = 18;
                var view = newTab.getActiveItem();
                this.tabIndex = 0;

                switch (tab._title) {
                    case config.str.WorkArea:
                        this.tabIndex = 1;
                        function loadWork() {
                            //view.loadMenu();
                        }
                        this.isLogin(loadWork);
                        break;
                    case config.str.InfoAre:
                        this.tabIndex = 2;
                        function loadNotification() {
                            //view.loadData();
                        }
                        this.isLogin(loadNotification);
                        break;
                    case config.str.MiArea:
                        this.tabIndex = 3;
                        function loadSetUp() {
                            //view.loadData();
                        }
                        this.isLogin(loadSetUp);
                        break;
                    default:
                        this.tabIndex = 0;
                        break;
                }
                tabBar.setActiveItem(newTab);
            }
        }
    },
    // 是否登录操作
    isLogin: function (onSuccess) {
        
        //if (QSTUtil.IsLogin()) {
        //    onSuccess();
        //} else {
        //    util.redirectTo("QST.Main.Login", "", { parentUrl: "QST.Main.Layout", onSuccess: onSuccess });
        //}

    },
    //安卓 返回按钮
    onBackTap: function () {
        //得到当前active放回上一级
        var view = Ext.Viewport.getActiveItem();
        //util.redirectTo(view.backUrl, "back");
        view.fireEvent('Back', this, view);
    },
    //初始化
    constructor: function (cfg) {
        var me = this;
        // 初始化系统信息
        me.loadInit();
        me.callParent(arguments);
        //加载Cordova
        me.loadCordova();
    },
    // 初始化系统信息
    loadInit: function () {
        ////加载用户信息
        //Ext.Ajax.request({
        //    url: config.url + '/InitData/InitSysInfo',
        //    params: { Dev: 'phone' },
        //    async: false,
        //    success: function (response) {
        //        config.idata = Ext.decode(response.responseText);
        //        //得到 单位
        //        var dictions = Ext.decode(config.idata.sysInfo.dictions);
        //        var dicData = [];
        //        Ext.Array.each(dictions, function (item) {
        //            var isFind = item.DictionKey.indexOf('10002') == -1 ? false : true;
        //            if (isFind) {
        //                dicData.push({
        //                    Text: item.DictionValue,
        //                    Value: item.DictionKey,
        //                    Tobject: item
        //                });
        //            }
        //        });
        //        config.dics = dicData;

        //        var setUp = [];
        //        Ext.Array.each(dictions, function (item) {
        //            var isFind = item.DictionKey.indexOf('1004100') == -1 ? false : true;
        //            if (isFind) {
        //                setUp.push({
        //                    Text: item.DictionValue,
        //                    Value: item.DictionKey,
        //                    Id: item.Id
        //                });
        //            }
        //        });
        //        config.set = setUp;
        //    }
        //});
    },
    //加载Cordova
    loadCordova: function () {
        var me = this;
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            //监听安卓 返回按钮
            document.addEventListener("backbutton", backTap, false);
            function backTap() {
                me.onBackTap();
            }
        }
    }
});
