/**-----------------------------------------------------------------
* @explanation:主界面菜单
* @created：Rainday
* @create time：2015/1/27 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Main.Home', {
    extend: 'Ext.TabPanel',
    xtype: 'main_home',
    config: {
        fullscreen: true,
        cls: 'navToolbarH',
        tabBar: {
            //高亮
            ui: 'light',
            layout: { //设置每个tab的位置为居中
                pack: 'center',
                align: 'center'
            },
            scrollable: { //设置可滚动的属性
                direction: 'horizontal',
                indicators: false
            }
        },
        listeners: {
            activeitemchange: function (tabBar, newTab, oldTab) {
                tabBar.cIndex = tabBar.indexOf(newTab) - 1;
                var view = newTab.getActiveItem();
                var tab = newTab.tab;
                switch (tab._title) {
                    case '企业文化':
                        view.loadData('10026001');
                        break;
                    case '招投标信息':
                        view.loadData('10026002');
                        break;
                    case '工程展示':
                        view.loadData('10026003');
                        break;
                    case '新闻中心':
                        view.loadData('10026004');
                        break;
                    case '人力资源':
                        view.loadData('10026005');
                        break;
                };
            }
        }
    },
    //初始化
    constructor: function (cfg) {
        var me = this;
        this.callParent(arguments);
        var menus = me.LoadTopMenu();
        me.setItems(menus);
        me.SetRoll();    },
    SetRoll: function () {
        var me = this;
        me.element.on({
            swipe: function (e, target, options, eOpts) {
                var index = me.cIndex;
                if (e.direction === 'right' && e.distance >= 80) {
                    index -= 1;
                    if (index <= 0) {
                        index = 0;
                    }
                }
                if (e.direction === 'left' && e.distance >= 80) {
                    index += 1;
                    if (index >= me.tLength) {
                        index = me.tLength - 1;
                    }
                }
                me.setActiveItem(index);
            }
        });
    },
    // 加载头部菜单
    LoadTopMenu: function () {

        var menus = [{
            title: '新闻中心',
            layout: 'card',
            items: [{
                xtype: 'panel',
            }]
        }, {
            xtype: 'container',
            title: '企业文化',
            layout: 'card',
            items: [{
                xtype: 'panel',
            }]
        }, {
            title: '招投标信息',
            layout: 'card',
            items: [{
                xtype: 'panel',
            }]
        }, {
            title: '工程展示',
            layout: 'card',
            items: [{
                xtype: 'panel',
            }]
        }, {
            title: '人力资源',
            layout: 'card',
            items: [{
                xtype: 'panel',
            }]
        }, {
            title: '天气预报',
            layout: 'card',
            items: [{
                xtype: 'panel',
            }]
        }];
        this.tLength = menus.length;
        return menus;
    }
});
