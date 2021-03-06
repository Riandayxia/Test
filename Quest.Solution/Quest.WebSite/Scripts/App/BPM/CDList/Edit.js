﻿/**-----------------------------------------------------------------
* @explanation:自定义列表信息编辑
* @created：rainday
* @create time：2016-09-01 13:05
* @modified history: //修改历史
/-------------------------------------------------------------------*/

/*
* 数据表编辑页面
*/
Ext.define("BPM.CDList.Edit", {
    extend: 'Ext.user.NEdit',
	xtype: 'bpm_cdlist_edit',
    layout: 'fit',
    modal: true,
    onlySave: true,
    layout: {
        type: 'table',
        columns: 1
    },
    closeAction: 'hide',
    defaults: {
        labelAlign: 'right',
        width: 300
    },
    items: [
        { xtype: 'hiddenfield', fieldLabel: '对应表', name: 'TableId'},
        { xtype: 'textfield', fieldLabel: '创建者', name: 'Creator'},
        { xtype: 'textfield', fieldLabel: 'DesignJson', name: 'DesignJson' },
        { xtype: 'textfield', fieldLabel: 'RunJson', name: 'RunJson' },
        { xtype: 'hiddenfield', fieldLabel: '唯一标识', name: 'Id'},
        { xtype: 'radiofield', fieldLabel: '是否删除', name: 'IsDeleted'},
        { xtype: 'datefield', fieldLabel: '创建时间', name: 'CreatedTime', dateFormat: 'Y/m/d ', value: new Date()},
        { xtype: 'datefield', fieldLabel: '修改时间', name: 'LastUpdatedTime', dateFormat: 'Y/m/d ', value: new Date()},
    ]
});
