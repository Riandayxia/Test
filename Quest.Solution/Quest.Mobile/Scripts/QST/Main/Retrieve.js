/**-----------------------------------------------------------------
* @explanation:登陆
* @created：Raindya
* @create time：2015/11/24 
* @modified history: //修改历史
/-------------------------------------------------------------------*/
Ext.define("QST.Main.Retrieve", {
    alternateClassName: 'main_retrieve',
    extend: 'Ext.form.Panel',
    xtype: 'main_retrieve',
    requires: ['Ext.form.FieldSet', 'Ext.field.Password', 'Ext.field.Select'],
    config: {
        scrollable: null,
        title: config.str.Reset,
        redirect: null,
        items: [
            {
                xtype: 'component',
                styleHtmlContent: true,
                margin: '30 10 0 10',
                html: '<div style="text-align:center"><img src="resources/icons/Icon.png" width="100" height="100"></div><div style="text-align:center"></div>'
            }
            , {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '40%'
                },
                margin: '30 10 0 10',
                items: [
                    {
                        name: 'Mobile',
                        placeHolder: '注册时使用的手机号（必填）',
                        xtype: 'numberfield', regex: /^1[3|4|5|8][0-9]{9}$/,
                        regexText: '手机号码格式错误！',
                        anchor: '90%',
                        allowBlank: true
                    },
                     {
                         label: '手机是否验证',
                         name: 'IsValidMobile',
                         xtype: 'hiddenfield'
                     },
                      {
                          xtype: 'panel',
                          layout: 'hbox',
                          cls: 'selectFile',
                          items: [
                              {
                                  xtype: 'numberfield',
                                  name: 'VerificationCode',
                                  placeHolder: '验证码（必填）',
                                  allowBlank: true,
                                  flex: 1,
                                  labelWidth: '33%'
                              }, {
                                  xtype: 'button',
                                  text: '获取验证码',
                                  cls: 'vEditButton',
                                  style: 'font-size:0.8em',
                                  height: '35px',
                                  width: '80px',
                                  handler: function (but) {
                                      //this.up('measuremanage_materialbilling_edit').fireEvent('setContract', but);
                                  }
                              }
                          ]
                      },
                      {
                           name: 'LoginPwd',
                           placeHolder: '新密码,6-12位的数字或字母（必填）',
                           xtype: 'passwordfield',
                           regex: /^[\da-zA-z]{6,12}$/,
                           regexText: '密码格式错误！',
                           anchor: '90%',
                           allowBlank: true
                       },
                     {
                         label: '密码是否验证',
                         name: 'IsValidLoginPwd',
                         xtype: 'hiddenfield'
                     },
                     {
                         name: 'LoginPwds',
                         xtype: 'passwordfield',
                         placeHolder: '再次输入密码（必填）',
                         allowBlank: true
                     },
                ]
            },
        {
            xtype: 'button',
            text: '确认',
            action: 'login',
            cls: 'loginButton',
            style: 'font-size:1.4em;',
            height: '40px',
            margin: '30 20 0 20',
            handler: function (but) {
                this.up('userLogin').fireEvent('login', but);
            }
        }],
        listeners: {
            //返回上一级
            Back: function (but, list) {
                util.redirectTo(this.backUrl, "back", { fType: 'Login' });
            }
        }
    },
    //初始化
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        ////加载头部菜单信息
        me.add(this.getHeader());
    },
    //主界面到此界面时加载[List刷新时会默认加载此方法]
    rendering: function (params) {
        if (params)
            this.backUrl = params.parentUrl;
        if (params.url)
            this.Url = params.url
        //获得用户登陆信息
        var user = Ext.decode(util.storeGet("logininfor"));
        this.setValues({ Account: user.LoginName });
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