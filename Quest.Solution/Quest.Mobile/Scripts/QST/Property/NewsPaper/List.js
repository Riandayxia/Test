/**-----------------------------------------------------------------
* @explanation:报事信息展示界面
* @created：HYF
* @create time：2016/10/9
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Property.NewsPaper.List', {
    extend: 'app.user.NSimpleList',
    xtype: 'property_newspaper_list',
    config: {
        addBut: true,
        addCls: 'action',
        moreBut: true,
        rootProperty: "data",
        cls: 'ux_list',
        search: true,//是否添加查询
        ckId: 'Id',  //设置数据主键(可配置)
        title: '报事保修',
        dataUrl: config.url + '/NewsPaper/GetAll',
        listMenu: [
        { text: config.string.RunWF, action: 'Insert' },
        { text: config.string.listSetPower, action: 'SetPower' },
        { text: config.string.listDisplayAdjustment, action: 'SetColumn' },
        ],
        modelArray: ['Id',  'NType', 'Address', 'Contacts', 'Phone', 'Title', 'Content', 'Status', 'Accessory', 'IsDeleted', 'CreatedTime', 'LastUpdatedTime'],
        fieldArray: [
          { label: '报事类型', name: 'NType', value: '保安' },
          { label: '报事地址', name: 'Content', value: '让小李来完成后面的任务' },
          { label: '联系人', name: 'Contacts', value: '1'},
          { label: '联系电话', name: 'Phone', value: '15922103388' },//, analytic: 'SHUtil.FormatTime'
          { label: '报事标题', name: 'Title', value: '1' },//, analytic: 'SHUtil.DicGetUser' 
          { label: '报事内容', name: 'Content', value: '1' }
        ],
        listeners: {

            //返回上一级
            Back: function (but, list) {
                util.redirectTo(this.backUrl, "back", {});
            },
            //添加
            Insert: function (but, list) {
                this.getStructureMenu().hide();
                util.redirectTo("QST.Property.NewsPaper.Edit", "", {
                    parentUrl: "QST.Property.NewsPaper.List", url: config.url + '/NewsPaper/Add'
                });
            },
            //单击查看详细信息
            itemsingletap: function (list, index, target, record, e, eOpts) {
                if (e.target.innerText == '配置') {
                    var me = this;
                    me.field = 'title';
                    SHUtil.WFConfig(list, record, this.ApplyId);
                }
            },
            //查询
            Search: function (field, list) {
                var search = field.getValue();
                //设置查询参数
                this.getStore().setParams({ search: search });
                this.getStore().loadPage(1);
            },// 更多功能
            More: function (but, view) {
                this.setStructureMenu(this.config.listMenu);
            }
        }
    },
    //主界面到此界面时加载[List刷新时会默认加载此方法]
    rendering: function (params) {
      
        //加载数据
        this.getStore().load();
    },
    //子界面返回到此界面时加载
    overViewResult: function (params) {
        this.getStore().loadPage(1);
    },

})