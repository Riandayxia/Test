using Quest.Core.Models.Base;
using Quest.Framework;
using System;
using Quest.Core.Data;
using Quest.Framework.MVC;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Quest.Core.Base.Impl
{
    internal partial class UserService
    {
        #region 公共属性

        #endregion

        #region 公共方法
        public OperationResult InsertRegistered(User entity, Boolean isSave = true)
        {
            #region 参数验证
            try
            {
                PublicHelper.CheckArgument(entity, "entity");
            }
            catch (ComponentException e)
            {
                return new OperationResult(OperationResultType.ParamError, e.Message, false);
            }
            #endregion
            if (this.Entities.Where(c => c.Mobile.Equals(entity.Mobile)).ToList().Count() == 0)
            {
                return this.Insert(entity);

            }
            else
            {
                return new OperationResult(OperationResultType.QueryNull, "该手机号码已注册", false);
            }
        }
        #endregion

        #region 私有方法

        #endregion
    }
}
