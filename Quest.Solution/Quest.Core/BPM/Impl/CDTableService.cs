﻿// <autogenerated>
//   This file was generated by T4 code generator EntityCodeScript.tt.
//   Any changes made to this file manually will be lost next time the file is regenerated.
// </autogenerated>

//------------------------------------------------------------------------------
// <copyright file="ICDTableService.cs">
//        Copyright(c)2013 QuestCN.All rights reserved.
//        CLR版本：4.0.30319.239
//        开发组织：溯汇软件@中国
//        公司网站：http://www.cnsuhui.com
//        所属工程：Quest.Core
//        生成时间：2016-10-09 17:22
// </copyright>
//------------------------------------------------------------------------------


using System;
using System.ComponentModel.Composition;
using Quest.Core.Data;
using Quest.Core.Models.BPM;

namespace Quest.Core.BPM.Impl
{
	/// <summary>
    /// 数据表 核心业务契约
    /// </summary>
    [Export(typeof(ICDTableService))]
    internal partial class CDTableService :RepositoryBase<CDTable,Guid>, ICDTableService
    {
        #region 公共属性

        #endregion

        #region 公共方法

        #endregion

        #region 私有方法

        #endregion
    }
}
