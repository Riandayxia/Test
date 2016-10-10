/**-----------------------------------------------------------------
* @explanation:投诉建议信息展示界面
* @created：HYF
* @create time：2016/10/9
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Property.Complaints.List', {
    extend: 'app.user.NSimpleList',
    xtype: 'property_complaints_list',
    config: {
        addBut: true,
        addCls: 'action',
        moreBut: true,
        rootProperty: "data",
        cls: 'ux_list',
        search: true,//是否添加查询
        ckId: 'Id',  //设置数据主键(可配置)
        title: '投诉建议',
        dataUrl: config.url + '/Complaints/GetAll',
        listMenu: [
        { text: config.string.RunWF, action: 'Insert' },
        { text: config.string.listSetPower, action: 'SetPower' },
        { text: config.string.listDisplayAdjustment, action: 'SetColumn' },
        ],
        modelArray: ['Id', 'CType', 'Content', 'Submitter', 'Contacts', 'Phone', 'Address', 'IsDeleted', 'CreatedTime', 'LastUpdatedTime'],
        fieldArray: [
          { label: '投诉类型', name: 'CType',value:'保安' },
          { label: '投诉内容', name: 'Content', value: '让小李来完成后面的任务' },
          { label: '提交人', name: 'Submitter', value: '1' },//, analytic: 'SHUtil.DicGetUser' 
          { label: '联系人', name: 'Contacts', value: '1'},
          { label: '联系电话', name: 'Phone', value: '15922103388' },//, analytic: 'SHUtil.FormatTime'
          { label: '详细地址', name: 'Address', value: '1' }
        ],
        listeners: {

            //返回上一级
            Back: function (but, list) {
                util.redirectTo(this.backUrl, "back", {});
            },
            //添加
            Insert: function (but, list) {
                this.getStructureMenu().hide();
                util.redirectTo("QST.Property.Complaints.Edit", "", {
                    parentUrl: "QST.Property.Complaints.List", url: config.url + '/Complaints/Add'
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