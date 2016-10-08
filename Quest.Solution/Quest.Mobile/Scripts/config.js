function _0e55416f09916815b87b3caa18d368756ca15b51() { };/*公共配置类*/
Ext.define('config', {
    extend: 'app.config',
    alternateClassName: 'config',
    statics: {
        str: {
            HomeArea: '首页',
            WorkArea: '工作区',
            Wares: '家电',
            Finance:'金融',
            InfoAre: '信息栏',
            MiArea: '我的',
            PressExitApp: '再按一次退出程序',
        },
        // 项目信息
        project: {
            // 所属项目Id
            pId: '',//'0F8F0ECB-BC05-4DB7-8A9D-A46100D936DC','8CD30B2E-EDBD-42BD-88F9-A45800B84AD8'
            pName: '未选择项目'
        },
        // 登录用户
        LoginUser: {
            Name: '',
            LoginName: '',
            Id:''
        },
        // 系统启动页面
        MainPage: 'QST.Main.Layout',
        // 当前登录时间
        CurrentTime: 0,
        // 过期时间
        Timeout: 15 * 60,
        // 登录界面
        LoginPage: 'QST.Main.Login',
        // 权限菜单
        powers: ['QST.Main.Menu', 'QST.Main.Infobar', 'QST.Main.SetList'],
        // 用户信息及系统信息
        idata: {},
        // 是否具有配置流程权限
        IsWFPower: function () {
            return true;
        },
        url: 'http://localhost:6206',
       // url: 'http://mobile.cnsuhui.com',
        javaScriptUrl: ''//js远程加载地址 为空默认加载本域js
    }
})