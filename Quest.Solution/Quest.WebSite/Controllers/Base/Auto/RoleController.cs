﻿//------------------------------------------------------------------------------
// <copyright file="IRoleService.cs">
//        Copyright(c)2013 QuestCN.All rights reserved.
//        CLR版本：4.0.30319.239
//        开发组织：溯汇软件@中国
//        公司网站：http://www.cnsuhui.com
//        所属工程：Quest.Core
//        生成时间：2016-09-22 09:17
// </copyright>
//------------------------------------------------------------------------------

using System;
using System.Linq;
using System.Web.Mvc;
using System.ComponentModel.Composition;
using System.Collections.Generic;
using Quest.Core;
using Quest.Framework;
using Quest.Framework.MVC;
using Quest.Core.Models.Base;
using Quest.Core.Base;

namespace Quest.WebSite.Controllers.Base
{
	/// <summary>
    /// 角色 控制层
    /// </summary>
    [Export]
    public partial class RoleController : BaseController
    {
        #region 属性

        /// <summary>
        /// 获取或设置 角色数据访问对象
        /// </summary>
        [Import]
        public IRoleService RoleService { get; set; }
        
        #endregion

        #region 视图功能

        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 添加 角色数据
        /// </summary>
        /// <param name="entity">角色对象</param>
        /// <returns>返回操作结果</returns>
        [HttpPost]
        [ValidateInput(false)]
        [Feature("添加","icon_add")]
        public virtual ActionResult Add(Role entity)
        {
            OperationResult or = RoleService.Insert(entity);
            return this.JsonFormat(or);
        }

        /// <summary>
        /// 修改 角色数据
        /// </summary>
        /// <param name="entity">角色对象</param>
        /// <returns>返回操作结果</returns>
        [HttpPost]
        [ValidateInput(false)]
        [Feature("修改","icon_edit")]
        public virtual ActionResult Update(Role entity)
        {
            entity.LastUpdatedTime = DateTime.Now;
            OperationResult or = RoleService.Update(entity);
            return this.JsonFormat(or);
        }

        /// <summary>
        /// 删除 角色数据 
        /// 根据角色唯一标识Id集合,数据格式','隔开“1,2,3,4...”
        /// </summary>
        /// <returns>返回操作结果</returns>
        [Feature("删除","icon_delete")]
        public virtual ActionResult Delete()
        {
            IList<Guid> ids = QuestRequest.GetGuids("ids");
            OperationResult or = RoleService.Delete(c => ids.Contains(c.Id));
            return this.JsonFormat(or);
        }

        #endregion
    }
}
