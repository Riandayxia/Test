Ext.define('QST.Main.SetList', {
    alternateClassName: 'setlist',
    extend: 'Ext.List',
    xtype: 'main_setlist',
    itemHeight: 100,
    Data: [
        {
            "name": '<span style="margin-right:2em;">用户:</span> 登录名:',
            url: 'QST.App.HRManagement.Personal.List',
            "icon": 'personal', "needsIcon": true, iconW: 30, iconH: 30
        },
        { "name": "", "icon": 'version', "needsIcon": false },
        { "name": "切换用户", url: 'QST.Main.Login', "icon": 'login', "needsIcon": true },
        { "name": "修改密码", url: 'QST.Main.ChangePassword', "icon": 'password', "needsIcon": true },
        //{ "name": "个人信息完善", url: 'QST.App.HRManagement.Personal.List', "icon": 'search', "needsIcon": true },
        { "name": "关于我们", "icon": 'version', "needsIcon": false },
        { "name": "帮助说明", url: 'QST.App.Systems.Help.List', "icon": 'help', "needsIcon": true },
        { "name": "问题反馈", url: 'QST.Main.UserFeedback', "icon": 'question', "needsIcon": true },
        { "name": "软件信息", url: 'QST.Main.Version', "icon": 'version', "needsIcon": true }
    ],
    config: {
        title: config.string.SetUpTitle,
        fullscreen: true,
        cls: 'list_wf',
        disableSelection: true,
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="menuList" style="<tpl if="needsIcon">background-color:#fff</tpl>">',
                '<tpl if="needsIcon"><img width="{[this.getWidth(values.iconW)]}" height="{[this.getHeight(values.iconH)]}" style="margin: 5px 10px;" src="resources/images/set/{icon}.png" align="absmiddle" /></tpl>',
                '<font style="margin:2px 0 10px 0">{name} </font>',
                //'<tpl if="secondRow">登录名：{loginName}</tpl>',{[QSTUtil.GetDiction(values.Gender)]}
                '<tpl if="needsIcon"><img width="6" height="15" src="resources/images/Arrow.png" style="display: inline; float: right; margin:18px 10px 0 0;"/></tpl>',
            '</div>', {
                getWidth: function (iconW) {
                    if (!iconW) {
                        return 23;
                    }
                    if (iconW > 23) {
                        return iconW;
                    } else {
                        return 23;
                    }
                },
                getHeight: function (iconH) {
                    if (!iconH) {
                        return 23;
                    }
                    if (iconH > 23) {
                        return iconH;
                    } else {
                        return 23;
                    }
                }
            }
            ),
        store: {
            fields: ['name', 'icon', 'needsIcon', 'url', 'style', 'iconW', 'iconH'],
            data: [
                {
                    "name": '<span style="margin-right:2em;">用户:</span> 登录名:',
                    url: 'QST.App.HRManagement.Personal.List',
                    "icon": 'personal', "needsIcon": true, iconW: 30, iconH: 30
                },
                { "name": "", "icon": 'version', "needsIcon": false },
                { "name": "切换用户", url: 'QST.Main.Login', "icon": 'login', "needsIcon": true },
                { "name": "修改密码", url: 'QST.Main.ChangePassword', "icon": 'password', "needsIcon": true },
                //{ "name": "个人信息完善", url: 'QST.App.HRManagement.Personal.List', "icon": 'search', "needsIcon": true },
                { "name": "关于我们", "icon": 'version', "needsIcon": false },
                { "name": "帮助说明", url: 'QST.App.Systems.Help.List', "icon": 'help', "needsIcon": true },
                { "name": "问题反馈", url: 'QST.Main.UserFeedback', "icon": 'question', "needsIcon": true },
                { "name": "软件信息", url: 'QST.Main.Version', "icon": 'version', "needsIcon": true }
            ]
        },
        listeners: {
            //点击事件
            itemsingletap: function (list, index, target, record, e, eOpts) {
                if (record.get('needsIcon')) {
                    list.menuTapButton(record.get('url'))
                }
            },
            //painted: function (element, eOpts) {
            //    var me = this;
            //    if (!config.idata || !config.idata.myInfo) {
            //        util.redirectTo("QST.Main.Login", "", { parentUrl: "QST.Main.Layout" });
            //    } else {
            //        me.loadData();
            //        me.showNumber();
            //    }
            //}
        }
    },
    // 显示通知信息条数
    showNumber: function () {
        var me = this;
        var prent = me.up('main_layout');
        prent.showNumber();
    },
    // 加
    // 菜单点击事件处理
    menuTapButton: function (url) {
        util.redirectTo(url, "", { parentUrl: "QST.Main.Layout" });
    },
    //初始化
    constructor: function (config) {
        var me = this;
        this.callParent(arguments);
        //加载头部菜单信息
        this.add(this.getHeader());
    },
    loadData: function () {
        var store = this.getStore();
        this.Data[0] = {
            "name": '<span style="margin-right:2em;">用户:' + config.LoginUser.Name + '</span> 登录名:' + config.LoginUser.LoginName,
            url: 'QST.App.HRManagement.Personal.List',
            "icon": 'personal', "needsIcon": true, iconW: 30, iconH: 30
        };
        store.setData(this.Data);
    },
    //头部菜单信息(private)
    getHeader: function () {
        var me = this;
        if (!this._homeHeaderBar) {
            this._homeHeaderBar = Ext.create("app.user.NavigationBar", {
                title: me._title,
                docked: 'top'
            });
        }
        return this._homeHeaderBar;
    },
    rendering: function () {
        alert();
    }
})