﻿/**-----------------------------------------------------------------
* @explanation:流程实例信息列表
* @created：rainday
* @create time：2016-08-18 16:36
* @modified history: //修改历史
/-------------------------------------------------------------------*/

Ext.define('BPM.WFRunInstance.Grid', {
    extend: 'Ext.user.NGrid',
    xtype: 'bpm_wfruninstance_grid',
    stateId: 'bpm_wfruninstance_grid',
    controllerName: 'WFRunInstance',
    al: false,
    isSelect: false,
    layout: 'fit',
    //方法地址
    dataUrl: 'WFRunInstance/GetAll',
    modelArray: ['MainId', 'UserId', 'DesignJSON', 'Id', 'IsDeleted', 'CreatedTime', 'LastUpdatedTime'],
    columns: [
        { text: '实体唯一标识', dataIndex: 'MainId', flex: 1 },
		{ text: '创建用户', dataIndex: 'UserId', flex: 1 },
		{ text: '运行时流程', dataIndex: 'DesignJSON', flex: 1 },
		{ text: '唯一标识', dataIndex: 'Id', flex: 1 },
		{ text: '是否删除', dataIndex: 'IsDeleted', flex: 1 },
		{ text: '创建时间', dataIndex: 'CreatedTime', flex: 1 },
		{ text: '修改时间', dataIndex: 'LastUpdatedTime', flex: 1 },

    ],
    featureArray: [{
        winUrl: '',
        serveUrl: 'WFRunInstance/Add',
        text: '新增',
        iconCls: 'icon_add',
        action: 'add_Data',
        type: [1, 3]
    }, {
        text: '修改',
        serveUrl: 'WFRunInstance/Update',
        iconCls: 'icon_edit',
        action: 'updata_Data',
        type: [1, 2]
    }, {
        text: '删除',
        serveUrl: 'WFRunInstance/Delete',
        iconCls: 'icon_delete',
        action: 'del_Data',
        type: [1, 2]
    }, {
        otype: 'nsearch',
        serveUrl: 'WFRunInstance/Search',
        width: 300,
        action: 'search_Data',
        type: [1]
    }],
    // 时间监听器
    listeners: {
        // 添加
        add_Data: function (but, record) {
            this.add_Data(but, record, this);
        },
        // 修改
        updata_Data: function (but, record) {
            this.updata_Data(but, record, this);
        },
        // 删除
        del_Data: function (but, record) {
            this.del_Data(but, record, this);
        },
        // 查询
        search_Data: function (but, record) {
            this.search_Data(but, record, this);
        }
    },
    // 添加
    add_Data: function (but, record, grid) {
        var me = this;
        //获得 添加窗体对象
        var object = {
            winTitle: but.text, winWidth: 660, win: 'BPM.WFRunInstance.Auto.Edit', hideFields: me.typeFields, config: {
                saveUrl: but.menuObj.serveUrl,
                onSaveSuccess: function (action) {
                    if (action.result.success) {
                        grid.store.load();
                    }
                }
            }
        }
        grid.winEdit = util.createWindow(object);
        var form = grid.winEdit.down("form").getForm();
        form.reset();
        // 打开窗体
        grid.winEdit.show();
    },
    // 修改
    updata_Data: function (but, record, grid) {
        var me = this;
        //得到选中的数据
        var selected = grid.getSelectionTobject();
        if (!selected) {
            Ext.Msg.alert("提示", "请选择修改数据");
            return;
        }
        //获得 添加窗体对象
        var object = {
            winTitle: but.text, winWidth: 660, win: 'BPM.WFRunInstance.Auto.Edit', hideFields: me.typeFields, config: {
                saveUrl: but.menuObj.serveUrl,
                onSaveSuccess: function () {
                    grid.store.load();
                }
            }
        }
        grid.winEdit = util.createWindow(object);
        var form = grid.winEdit.down("form").getForm();
        form.reset();
        //给添加窗体赋值
        form.setValues(selected);
        // 打开窗体
        grid.winEdit.show();
    },
    // 删除
    del_Data: function (but, record, grid) {
        var me = this;
        //得到选中的数据
        var selected = grid.getSelectionTobject();
        if (!selected) {
            Ext.Msg.alert("提示", "请选择删除数据");
            return;
        }
        util.doDelete({
            url: but.menuObj.serveUrl,//提交地址
            params: { ids: selected.Id },//参数
            success: function (result) {
                if (result) {
                    grid.store.load();
                }
            }
        });
    },
    // 查询
    search_Data: function (but, record, grid) { }
});
