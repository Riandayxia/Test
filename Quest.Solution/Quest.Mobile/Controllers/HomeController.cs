using Quest.Core.Base;
using Quest.Framework;
using Quest.Mobile.CommonSupport.Filter;
using Quest.Mobile.MVC.ViewModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using Quest.Core.Models.Base;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Web.Security;
using System.Web;

namespace Quest.Mobile.Controllers
{
    public class HomeController : BaseController
    {
        #region 属性
        /// <summary>
        /// 获取或设置 用户数据访问对象
        /// </summary>
        [Import]
        private IUserService UserService { get; set; }

       

        #endregion
        public HomeController()
        {
        }
        public ActionResult Index()
        {
            return View();
        }

        //[NoAuthorize]
        //[HttpPost]
        //public ActionResult LoginPhone(LoginModel model)
        //{
        //    User user = new User() { LoginName = model.Account, Password = model.Password };
        //    OperationResult result = UserService.Login(user);
        //    if (result.ResultType == OperationResultType.Success)
        //    {
        //        User member = (User)result.AppendData;
        //        CurrentUser.Save(member);
        //        //写入cookie
        //        WriteCookie(model, user);
        //    }
        //    return this.JsonFormat(result);
        //}

        ///// <summary>
        ///// 写cookie
        ///// </summary>
        ///// <param name="user"></param>
        //private void WriteCookie(LoginModel model, User user)
        //{
        //    FormsAuthentication.SetAuthCookie(user.LoginName, true, FormsAuthentication.FormsCookiePath);
        //    FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(
        //    1, user.LoginName, DateTime.Now, DateTime.Now.AddMinutes(5), false, user.LoginName);
        //    Task t1 = Task.Factory.StartNew(delegate
        //    {
        //        // generate new identity
        //        FormsIdentity identity = new FormsIdentity(ticket);
        //    });
        //    Task t2 = Task.Factory.StartNew(delegate
        //    {
        //        HttpCookie cookie = new HttpCookie(FormsAuthentication.FormsCookieName, FormsAuthentication.Encrypt(ticket));
        //        // write to client.
        //        Response.Cookies.Add(cookie);
        //    });
        //    Task.WaitAll(t1, t2);
        //}
    }
}
