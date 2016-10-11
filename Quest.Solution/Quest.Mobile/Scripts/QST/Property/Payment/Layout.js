Ext.define('QST.Property.Payment.Layout', {
    extend: 'Ext.Container',
    xtype: 'property_payment_layout',
    requires: ['QST.Main.HomeTopImg', 'QST.Property.Payment.List'],
    fullscreen: true,
    config: {
        title: '重庆市',
        layout: 'vbox',
        scrollable: {
            directionLock: true
        },
        items: [
            {
                xtype: 'panel',
                items: [{
                    xtype: 'property_payment_list'
                }]
            }, {
                xtype: 'panel',
                cls: 'home_msg',
                height: 60,
                html: '物业费'
            }, {
                xtype: 'panel',
                cls: 'home_msg',
                height: 60,
                html: '停车费'
            }, {
                xtype: 'panel',
                cls: 'home_msg',
                height: 60,
                html: '有线电视费'
            }, {
                xtype: 'panel',
                cls: 'home_msg',
                height: 60,
                html: '有线宽带'
            }, {
                xtype: 'panel',
                cls: 'home_msg',
                height: 60,
                html: '水费'
            }, {
                xtype: 'panel',
                cls: 'home_msg',
                height: 60,
                html: '电费'
            }, {
                xtype: 'panel',
                cls: 'home_msg',
                height: 60,
                html: '煤气费'
            }, {
                xtype: 'panel',
                cls: 'home_msg',
                height: 60,
                html: '缴费'
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
                    handler: function (but) {
                        me.fireEvent('Back', but, me);
                    }
                }]
            });
        }
        return this._headerBar;
    }
});