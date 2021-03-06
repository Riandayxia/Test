﻿// <autogenerated>
//   This file was generated by T4 code generator EntityCodeScript.tt.
//   Any changes made to this file manually will be lost next time the file is regenerated.
// </autogenerated>

//------------------------------------------------------------------------------
// <copyright file="IComplaintsService.cs">
//        Copyright(c)2013 QuestCN.All rights reserved.
//        CLR版本：4.0.30319.239
//        开发组织：溯汇软件@中国
//        公司网站：http://www.cnsuhui.com
//        所属工程：Quest.Core
//        生成时间：2016-10-10 11:16
// </copyright>
//------------------------------------------------------------------------------

using System;
using System.ComponentModel.Composition;
using Quest.Core.Data;
using Quest.Core.Models.Property;
using Quest.Framework;

namespace Quest.Core.Property
{
	/// <summary>
    /// 活动资讯 核心业务契约
    /// </summary>
    public partial interface ICommunityService 
    {
        #region 公共属性

        #endregion

        #region 公共方法
           /// <summary>
        /// 插入 首页内容 记录
        /// </summary>
        /// <param name="entity">  首页内容 对象 </param>
        /// <param name="isSave"> 是否执行保存 </param>
        /// <returns> 操作影响的行数 </returns>
        OperationResult Add(Community entity, Boolean isSave = true);
        #endregion

        #region 私有方法

        #endregion
    }
}
