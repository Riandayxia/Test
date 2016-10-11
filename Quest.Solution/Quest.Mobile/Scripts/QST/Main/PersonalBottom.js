Ext.define('QST.Main.PersonalBottom', {
    extend: 'Ext.List',
    xtype: 'personal_bottom',
    alternateClassName: 'personal',
    config: {
        fullscreen: true,
        cls: 'list_wf',
        layout: 'fit',
        disableSelection: true,
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="menuList" style="<tpl if="needsIcon">background-color:#fff</tpl>">',
                '<tpl if="needsIcon"><img width="{[this.getWidth(values.iconW)]}" height="{[this.getHeight(values.iconH)]}" style="margin: 5px 10px;" src="resources/images/set/{icon}.png" align="absmiddle" /></tpl>',
                '<font style="margin:2px 0 10px 0">{name} </font>',
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
                { "name": "", "icon": 'version', "needsIcon": false },
                { "name": "切换用户", url: 'SH.Main.Login', "icon": 'login', "needsIcon": true },
                { "name": "修改密码", url: 'SH.Main.ChangePassword', "icon": 'password', "needsIcon": true },
                { "name": "关于我们", "icon": 'version', "needsIcon": false },
                { "name": "帮助说明", url: 'SH.App.Systems.Help.List', "icon": 'help', "needsIcon": true },
                { "name": "问题反馈", url: 'SH.Main.UserFeedback', "icon": 'question', "needsIcon": true },
                { "name": "软件信息", url: 'SH.Main.Version', "icon": 'version', "needsIcon": true }
            ]
        },
        listeners: {
            //点击事件
            itemsingletap: function (list, index, target, record, e, eOpts) {
                if (record.get('needsIcon')) {
                    list.menuTapButton(record.get('url'))
                }
            },
        }
    },
    //初始化
    constructor: function (cfg) {
        var me = this;
        this.callParent(arguments);

    }
})