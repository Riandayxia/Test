using Quest.Core.Base;
using Quest.Core.Models.Base;
using Quest.Framework;
using Quest.Framework.MVC;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Quest.Mobile.Controllers
{
    /// <summary>
    /// 数据字典 控制层
    /// </summary>
    [MenuDetail(Title = "用户管理", MType = MenuType.Menu, Icon = "yhgl", Use = MenuUse.All)]
    public class UserController : BaseController
    {
        #region 属性

        /// <summary>
        /// 获取或设置 用户数据访问对象
        /// </summary>
        [Import]
        public IUserService UserService { get; set; }
        #endregion
       
        public ActionResult Index()
        {
            return View();
        }
        //public ActionResult Registered(User entity)
        //{
        //    OperationResult or = UserService.InsertRegistered(entity);
        //    return this.JsonFormat(or);
        //}

        //public ActionResult Reset(User entity)
        //{
        //    OperationResult or = UserService.Reset(entity);
        //    return this.JsonFormat(or);
        //}
    }
}