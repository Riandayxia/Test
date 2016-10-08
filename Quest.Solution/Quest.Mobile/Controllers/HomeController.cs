using Quest.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Quest.Mobile.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController()
        {
        }
        public ActionResult Index()
        {
            //Response.Redirect("scripts");  
            return View();
        }
    }
}
