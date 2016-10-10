/**-----------------------------------------------------------------
* @explanation:注册
* @created：Raindya
* @create time：2015/11/24 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define("QST.App.HRManagement.User.Registered", {
    alternateClassName: 'user_resistered',
    extend: 'Ext.form.Panel',
    xtype: 'user_resistered',
    requires: ['Ext.form.FieldSet', 'Ext.field.Password', 'Ext.field.Select'],
    config: {
        scrollable: null,
        //formSubmit: false,
        title: config.str.Registered,
        redirect: null,
        items: [
           { label: '手机', name: 'Mobile', placeHolder: '请输入电话号码（必填）', xtype: 'numberfield', matcher: /^1[3|4|5|8][0-9]{9}$/, message: '手机号码格式错误！' },
           { label: '手机是否验证', name: 'IsValidMobile', xtype: 'hiddenfield' },
           { label: '密码', name: 'LoginPwd', placeHolder: '请输入密码（必填）', xtype: 'passwordfield' },//
           { label: '重新输入密码', name: 'LoginPwds', placeHolder: '请输入密码（必填）', xtype: 'passwordfield' },
           {
               xtype: 'button',
               text: config.str.Registered,
               height: '40px',
               action: 'formSubmit',
               cls: 'loginButton',
               margin: '30 10 0 10',
               handler: function (but) {
                   var me = this.up('user_resistered');
                   me.fireEvent('formSubmit', but, me);
               }
           }],
        listeners: {
            //返回上一级
            Back: function (but, list) {
                util.redirectTo(this.backUrl, "back", { fType: 'Login' });
            },
            //自定义提交
            formSubmit: function (but, view) {
                if (this.verification()) {
                    //验证手机
                    var phone = view.down('numberfield[name=Mobile]').getValue();
                    if (phone == "" || phone == null) {
                        Ext.Msg.alert('提示', '电话号码不能为空！');
                        return;
                    }
                    //验证手机格式
                    var phoneErrors = view.down('numberfield[name=Mobile]').config
                    if (!phoneErrors.matcher.test(phone)) {
                        Ext.Msg.alert('提示', phoneErrors.message);
                        return;
                    }
                    //验证密码
                    var pwd = view.down('passwordfield[name=LoginPwd]').getValue();
                    var pwds = view.down('passwordfield[name=LoginPwds]').getValue();
                    if (pwd == "") {
                        Ext.Msg.alert('提示', '密码不能为空！');
                        return;
                    } if (pwd.length < 8 || pwd.length > 16) {
                        Ext.Msg.alert('提示', '密码长度不能小于8个字符或大于16个字符！');
                        return;
                    }
                    if (pwd != pwds) {
                        Ext.Msg.alert('提示', '两次输入的密码不一致！');
                        return;
                    }
                    view.submit({
                        url: config.url + '/User/Registered',
                        method: 'POST',
                        //提交成功
                        success: function (action, response) {
                            //存储用户信息
                            util.storeSet("logininfor", Ext.JSON.encode(response.data));
                            util.showMessage(response.msg, true);
                            //初始化用户数据
                            view.loadInit();
                            //更新当前用户设备信息[5秒后执行 不占用菜单请求时间]
                            setTimeout(SHUtil.UpdateEquipment, 5000);
                        },
                        //提交失败
                        failure: function (action, response) {
                            util.hideMessage();
                            if (response.status == 500) {
                                Ext.Msg.alert('提示', '注册失败！');
                            }
                            else {
                                util.showMessage(response.msg, true);
                            }
                        }
                    });
                }
            }
        }
    },
    // 初始化系统信息
    loadInit: function () {
        var me = this;
        //加载用户信息
        Ext.Ajax.request({
            url: config.url + '/InitData/InitMyInfo',
            success: function (response) {
                Ext.apply(config.idata, {
                    myInfo: Ext.decode(response.responseText)
                });
                //切换到主界面
                me.switchingMain();
                util.hideMessage();
            }
        });
    },
    //切换到主界面
    switchingMain: function () {
        var pInfo = Ext.decode(util.storeGet("projectInfo"));
        if (!pInfo) {
            util.redirectTo("QST.Main.Projects", "", { parentUrl: "QST.Main.Login", url: this.Url });
        } else {
            util.redirectTo("QST.Main.Layout", "", { projectName: pInfo.pName, projectId: pInfo.pId, url: this.Url });
        }
    },
    ////初始化
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        ////加载头部菜单信息
        me.add(this.getHeader());
    },
    //主界面到此界面时加载[List刷新时会默认加载此方法]
    rendering: function (params) {
        //清空原始数据
        this.reset();
        if (params)
            this.backUrl = params.parentUrl;
        if (params.url)
            this.Url = params.url
    },
    //头部菜单信息(private)
    getHeader: function () {
        var me = this;
        if (!this._homeHeaderBar) {
            this._homeHeaderBar = Ext.create("app.user.NavigationBar", {
                title: me._title,
                docked: 'top',
                items: [
                    {
                        iconCls: 'arrow_left',
                        action: 'Back',
                        cls: 'nbutton',
                        align: 'left',
                        handler: function (but) {
                            me.fireEvent('Back', but, me);
                        }
                    }
                ],
            });
        }
        return this._homeHeaderBar;
    }
});