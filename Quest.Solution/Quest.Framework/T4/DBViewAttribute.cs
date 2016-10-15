﻿/*  作者：      RaindayXia
*  创建时间：   2014/7/23 19:01:58
*
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Quest.Framework.T4
{
    /// <summary>
    /// 用于视图对象
    /// </summary>
    [AttributeUsage(AttributeTargets.Class)]
    public class DBViewAttribute : Attribute
    {
        #region Properties

        /// <summary>
        /// 描述主题
        /// </summary>
        public String Title { get; set; }

        #endregion

        #region Constructors

        /// <summary>
        /// 初始化一个新的实例的 <see cref="SQuest.Framework.T4.ViewAttribute"/> 类.
        /// </summary>
        /// <param name="title">标题</param>
        public DBViewAttribute(String title)
        {
            this.Title = title;
        }

        #endregion
    }
}