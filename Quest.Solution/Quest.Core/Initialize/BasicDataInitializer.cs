using Quest.Core.Base;
using Quest.Framework;
using Quest.Core.Models.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.ComponentModel.Composition.Hosting;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using Quest.Framework.MVC;

namespace Quest.Core.Initialize
{
    [Export]
    public class BasicDataInitializer
    {
        #region 实例
        /// <summary>
        /// 实例化流程应用
        /// </summary>
        public BasicDataInitializer()
        {
            #region 注册MEF
            AggregateCatalog aggregateCatalog = new AggregateCatalog();
            var thisAssembly = new DirectoryCatalog(AppDomain.CurrentDomain.RelativeSearchPath, "*.dll");
            aggregateCatalog.Catalogs.Add(thisAssembly);
            CompositionContainer container = new CompositionContainer(aggregateCatalog);
            container.ComposeParts(this);
            #endregion
        }
        #endregion


        [Import]
        private IDictionaryService DictionaryService { get; set; }

        [Import]
        private IMenuService MenuService { get; set; }

        /// <summary>
        /// 基本数据初始化
        /// </summary>
        public void BasicData()
        {
            #region 菜单

            List<Menu> menus = GetMenus();
            MenuService.AddOrUpdate((c => new { c.ParentName, c.ControllerName }), menus, false);

            #endregion

            #region 数据字典

            Dictionary dic_MType = new Dictionary() { Id = "00000000-0000-0000-0001-000000000000".GetGuid(), ParentId = Guid.Empty, Keyword = "菜单类型", Key = "10001", Value = "菜单类型", Sequence = 1 };
            Dictionary dic1 = new Dictionary() { Id = "00000000-0000-0000-0001-000000000001".GetGuid(), ParentId = dic_MType.Id, Keyword = "菜单", Key = MenuType.Menu.GetHashCode().GetString(), Value = "菜单", Sequence = 1 };
            Dictionary dic2 = new Dictionary() { Id = "00000000-0000-0000-0001-000000000002".GetGuid(), ParentId = dic_MType.Id, Keyword = "功能", Key = MenuType.Feature.GetHashCode().GetString(), Value = "功能", Sequence = 2 };

            List<Dictionary> dics = new List<Dictionary>() { dic_MType, dic1, dic2 };
            OperationResult or = DictionaryService.AddOrUpdate((c => new { c.Id }), dics.ToArray(), false);

            #endregion

            // 统一提交,并带有事务回滚功能
            DictionaryService.Dispose();
        }

        /// <summary>
        /// 获取程序集中的菜单信息
        /// 需要满足菜单相关规范
        /// </summary>
        /// <returns></returns>
        public List<Menu> GetMenus()
        {
            List<Menu> menus = new List<Menu>();
            List<Assembly> asseblys = AppDomain.CurrentDomain.GetAssemblies().Where(c => c.GetTypes().Where(t => t.GetCustomAttributes(typeof(MenuDetailAttribute), true).Length > 0).Count() > 0).ToList();

            asseblys.ForEach(c =>
            {
                List<Type> types = c.GetTypes().Where(o => o.GetCustomAttributes(typeof(MenuDetailAttribute), true).Length > 0).ToList();

                List<Menu> items = types.Where(t => t.GetCustomAttributes(typeof(MenuDetailAttribute), true).Length > 0).Select(t => new
                 {
                     type = t,
                     md = t.GetCustomAttributes(typeof(MenuDetailAttribute), true)[0] as MenuDetailAttribute,
                 }).Select(m => new Menu
                 {
                     Name = m.md.Title,
                     ParentName = m.md.ParentName.IsNullOrEmpty() ? m.type.Namespace.Substring(m.type.Namespace.LastIndexOf(".") + 1) : m.md.ParentName,
                     ControllerName = m.type.Name.Replace("Controller", String.Empty).Replace("_AR", String.Empty),
                     MenuLink = m.type.Namespace.Remove(0, m.type.Namespace.LastIndexOf('.') + 1) + "." + m.type.Name.Replace("Controller", String.Empty) + ".Layout",
                     PhoneLink = m.type.Namespace.Remove(0, m.type.Namespace.LastIndexOf('.') + 1) + "." + m.type.Name.Replace("Controller", String.Empty) + ".List",
                     MType = m.md.MType.GetHashCode().GetInt32(),
                     Use = m.md.Use.GetHashCode().GetInt32(),
                     IconClass = m.md.Icon,
                     IsDeleted = m.md.IsVisible
                 }).ToList();
                menus.AddRange(items);
            });

            return menus;
        }
    }
}