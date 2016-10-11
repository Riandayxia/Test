﻿using Quest.Framework;
using Quest.Framework.T4;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace Quest.Core.Models.Property
{
    [DBTable("活动资讯")]
    [DataContract]
    [Export(typeof(IEntity))]
    public class Community : BaseEntity
    {
        #region Properties
        /// <summary>
        /// 活动标题
        /// </summary>
        [DataMember]
        [DBColumn("活动标题")]
        public String Title { get; set; }

        /// <summary>
        /// 投诉内容
        /// </summary>
        [DataMember]
        [DBColumn("活动内容")]
        public String Content { get; set; }

        /// <summary>
        /// 提交人
        /// </summary>
        [DataMember]
        [DBColumn("活动时间")]
        public DateTime ActivityTime { get; set; }

        /// <summary>
        /// 发布人
        /// </summary>
        [DataMember]
        [DBColumn("发布人")]
        public String Publisher { get; set; }
        #endregion
    }
}
