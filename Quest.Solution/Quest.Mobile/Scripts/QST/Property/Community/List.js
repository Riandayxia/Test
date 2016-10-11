/**-----------------------------------------------------------------
* @explanation:投诉建议信息展示界面
* @created：HYF
* @create time：2016/10/9
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Property.Community.List', {
    extend: 'app.user.NSimpleList',
    xtype: 'property_Community_list',
    config: {
        addBut: false,
        addCls: 'action',
        moreBut: false,
        rootProperty: "data",
        cls: 'ux_list',
        search: true,//是否添加查询
        ckId: 'Id',  //设置数据主键(可配置)
        title: '社区活动',
        dataUrl: config.url + '/Community/GetAll',
        modelArray: ['Id', 'Title', 'Content', 'ActivityTime', 'Publisher', 'IsDeleted', 'CreatedTime', 'LastUpdatedTime'],
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="container">',
                '<div class="header"><h1>{Title}<h1></div>',
                '<div class="header2">',
                    '<div class="ctent" style="width:33%;border:0px!important;"><li class="title">活动时间</li><li><span class="_ctent">{[SHUtil.FormatTime(values.ActivityTime)]}</span></li></div>',
                    '<div class="ctent" style="width:33%;"><li class="title">活动内容</li><li><span class="_ctent">{Content}</span></li></div>',
                    '<div class="ctent" style="width:33%;"><li class="title">发布人</li><li><span class="_ctent">{Publisher}</span></li></div>',
                '</div>',
                '<div class="footer"></div>',
            '</div>'),
        listeners: {

            //返回上一级
            Back: function (but, list) {
                util.redirectTo(this.backUrl, "back", {});
            },
            //单击查看详细信息
            itemsingletap: function (list, index, target, record, e, eOpts) {
                if (!this._tapHold) {
                    var record = util.copyObjects(record.data);
                    util.redirectTo("QST.Property.Complaints.Details", "", { parentUrl: "QST.Property.Complaints.List", data: record });
                }
            },
            //查询
            Search: function (field, list) {
                var search = field.getValue();
                //设置查询参数
                this.getStore().setParams({ search: search });
                this.getStore().loadPage(1);
            }
        }
    },
    //主界面到此界面时加载[List刷新时会默认加载此方法]
    rendering: function (params) {
        if (params) {
            this.backUrl = params.parentUrl;
        }
        //加载数据
        this.getStore().load();
    },
    //子界面返回到此界面时加载
    overViewResult: function (params) {
        //this.getStore().loadPage(1);
        this.getStore().load();
    }

})