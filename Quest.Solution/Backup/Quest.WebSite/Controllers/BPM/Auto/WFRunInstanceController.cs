﻿//------------------------------------------------------------------------------
// <copyright file="IWFRunInstanceService.cs">
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
using Quest.Core.Models.BPM;
using Quest.Core.BPM;

namespace Quest.WebSite.Controllers.BPM
{
	/// <summary>
    /// 流程实例 控制层
    /// </summary>
    [Export]
    public partial class WFRunInstanceController : BaseController
    {
        #region 属性

        /// <summary>
        /// 获取或设置 流程实例数据访问对象
        /// </summary>
        [Import]
        public IWFRunInstanceService WFRunInstanceService { get; set; }
        
        #endregion

        #region 视图功能

        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 添加 流程实例数据
        /// </summary>
        /// <param name="entity">流程实例对象</param>
        /// <returns>返回操作结果</returns>
        [HttpPost]
        [ValidateInput(false)]
        [Feature("添加","icon_add")]
        public virtual ActionResult Add(WFRunInstance entity)
        {
            OperationResult or = WFRunInstanceService.Insert(entity);
            return this.JsonFormat(or);
        }

        /// <summary>
        /// 修改 流程实例数据
        /// </summary>
        /// <param name="entity">流程实例对象</param>
        /// <returns>返回操作结果</returns>
        [HttpPost]
        [ValidateInput(false)]
        [Feature("修改","icon_edit")]
        public virtual ActionResult Update(WFRunInstance entity)
        {
            entity.LastUpdatedTime = DateTime.Now;
            OperationResult or = WFRunInstanceService.Update(entity);
            return this.JsonFormat(or);
        }

        /// <summary>
        /// 删除 流程实例数据 
        /// 根据流程实例唯一标识Id集合,数据格式','隔开“1,2,3,4...”
        /// </summary>
        /// <returns>返回操作结果</returns>
        [Feature("删除","icon_delete")]
        public virtual ActionResult Delete()
        {
            IList<Guid> ids = QuestRequest.GetGuids("ids");
            OperationResult or = WFRunInstanceService.Delete(c => ids.Contains(c.Id));
            return this.JsonFormat(or);
        }

        #endregion
    }
}
