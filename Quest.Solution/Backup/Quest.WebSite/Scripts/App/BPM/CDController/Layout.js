﻿/*
工程管理布局
*/
Ext.define('BPM.CDController.Layout', {
    extend: 'Ext.container.Container',
    xtype: 'main_layout',
    layout: 'border',
    requires: ['BPM.CDController.Auto.Grid'],
    items: [{
        region: 'center', xtype: 'udcontroller_auto_grid', collapsible: true, split: true, header: false
    }, {
        region: 'south', xtype: 'udcontroller_auto_grid', collapsible: true, split: true, header: false, height: '50%'
    }],
    initComponent: function () {
        var me = this;
        this.callParent(arguments);
    }
});
