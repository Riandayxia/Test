﻿/**-----------------------------------------------------------------
* @explanation:地址管理展示界面
* @created：XS
* @create time：2015/8/20
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define('QST.Users.Address.List', {
    extend: 'app.user.NSimpleList',
    xtype: 'user_address_list',
    config: {
        isPage: false,
        moreBut: true,
        rootProperty: "data", //root属性<input type="radio" name="field＿name" checked value="'value" > 
        addBut: true,
        cls: 'ux_list',
        search: true,//是否添加查询
        defTitle: '删除选中数据', // 标题
        ckId: 'Id',  //设置数据主键(可配置)
        listMenu: [
           { text: config.str.Insert, action: 'Insert' },
           { text: config.str.listDisplayAdjustment, action: 'SetColumn' },
           { text: config.str.listBatchEdit, action: 'AllSelect' },
        ],
        title: config.str.AddressList,
        dataUrl: config.url + '/Address/GetByUsersId',
        modelArray: ['Id', 'UsersId', 'Receiver', 'Mobile', 'TheCell', 'IsDefault', 'DetailedAddress', 'IsDeleted',
            'CreatedTime', 'LastUpdatedTime'],
        itemTpl: Ext.create('Ext.XTemplate',
           '<div class="container">',
               '<div class="header"><h1>{Receiver}<h1></div>',
               '<div class="header2">',
                  '<div class="ctent" style="width:30%;"><li class="title">联系电话</li><li><span class="_ctent">{Mobile}</span></li></div>',
                  '<div class="ctent" style="width:50%;"><li class="title">详细地址</li><li><span class="_ctent">{DetailedAddress}</span></li></div>',
                  '<div class="ctent" style="width:20%;"><li class="title">默认地址</li><li><span class="_ctent">{[this.IsVisible(values.IsDefault)]}</span></li></div>',
               '</div>',
               '<div class="footer"></div>',
           '</div>', {
               //是否激活
               IsVisible: function (val) {
                   var str = '<span style="display:inline-block;padding: .4em .6em .5em;border-radius: .5em;color: white;';
                   switch (val) {
                       case false:
                           str = str + 'background-color: #CACACA;">不是';
                           break;
                       case true:
                           str = str + 'background-color:#E66767">是'
                           break;
                   }
                   return str + '</span>';
               }
           }),
        //fieldArray: [
        //   { label: '联系电话', name: 'Mobile', value: '15823366974' },
        //   { label: '收货人', name: 'Receiver', value: '小王' },
        //   { label: '所在小区', name: 'TheCell', value: '南城花园' },
        //   { label: '详细地址', name: 'DetailedAddress', value: '重庆市江北区观音桥' },
        //],
        listeners: {
            //返回上一级
            Back: function (but, list) {
                util.redirectTo(this.backUrl, "back");
            },
            //菜单加载前
            triggerago: function () {
                this._autoMenu = false;
            },
            //添加
            Insert: function (but, list) {
                this.getStructureMenu().hide();
                util.redirectTo("QST.Users.Address.Edit", "", {
                    parentUrl: "QST.Users.Address.List",
                    url: config.url + '/Address/Add',
                    data: { UsersId: this.UserId },
                });
            },
            //单击查看详细信息
            itemsingletap: function (list, index, target, record, e, eOpts) {
                    var record = util.copyObjects(record.data);
                    util.redirectTo("QST.Users.Address.Details", "", {
                        parentUrl: "QST.Users.Address.List", data: record
                    });
            },
            // 列表展示设置
            SetColumn: function (but, view, record) {
                this.getStructureMenu().hide();
                util.redirectTo("SH.App.Systems.ListConfig.ViewEdit", "", { parentUrl: "SH.App.HRManagement.Askfoleave.Work.List", fieldArray: this.config.fieldArray, viewId: this.id });
            },
            //开始多选
            AllSelect: function (but, view) {
                this.beginSimple();
                this.getStructureMenu().hide();
            },
            // 多选回调函数
            SimpleSuccess: function (list, items, ids, simpleType) {
                //调用删除方法
                util.DoDelete({
                    url: config.url + '/Address/Delete',
                    params: { ids: ids.toString() },
                    success: function (response) {
                        list.rendering();
                    }
                });
            },
            // 更多功能
            More: function (but, view) {
                this.setStructureMenu(this.config.listMenu);
            }
        }
    },
    //主界面到此界面时加载[List刷新时会默认加载此方法]
    rendering: function (params) {
        if (params) {
            if (params.parentUrl) {
                this.backUrl = params.parentUrl;
            }
            if (params.data) {
                this.data = params.data
            }
            this.UserId = this.data.userId;
        }
        //设置查询参数
        this.getStore().setParams({ userId: this.UserId });
        //加载数据
        this.getStore().load();
    },
    //子界面返回到此界面时加载
    overViewResult: function (params) {
        //当编辑数据成功时加载数据
        this.getStore().setParams({ userId: this.UserId });
        this.getStore().load();
    }
})