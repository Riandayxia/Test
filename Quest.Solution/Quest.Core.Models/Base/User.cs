using System;
using Quest.Framework;
using Quest.Framework.T4;
using System.Runtime.Serialization;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.Composition;

namespace Quest.Core.Models.Base
{
    [DBTable("用户")]
    [DataContract]
    [Export(typeof(IEntity))]
    public class User : BaseEntity
    {
        public User()
        {
        }

        /// <summary>
        /// 获取或设置 用户名
        /// </summary>
        [DataMember]
        [StringLength(64)]
        [DBColumn("用户名")]
        public String Name { get; set; }
        /// <summary>
        /// 获取或设置 用户密码
        /// </summary>
        [DataMember]
        [StringLength(64)]
        [DBColumn("用户密码")]
        public String Password { get; set; }

    }
}
