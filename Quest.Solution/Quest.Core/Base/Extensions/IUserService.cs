﻿using Quest.Core.Models.Base;
using Quest.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quest.Core.Base
{
    public partial interface IUserService
    {
        #region 公共属性

        #endregion

        #region 公共方法
        /// <summary>
        /// 注册添加验证
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="isSave"></param>
        /// <returns></returns>
        OperationResult InsertRegistered(User entity, Boolean isSave = true);
        /// <summary>
        /// 找回密码
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="isSave"></param>
        /// <returns></returns>
        OperationResult Reset(User entity);
        #endregion

        #region 私有方法

        #endregion
    }
}
