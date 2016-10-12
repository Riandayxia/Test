namespace Quest.Core.Data.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Quest.Framework;
    using System.Configuration;
    using Quest.Framework.MVC;

    internal sealed class Configuration : DbMigrationsConfiguration<AppDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(AppDBContext context)
        {
            bool isInitialize = ConfigurationManager.AppSettings["isInitialize"].CastTo(false);

            #region 数据字典
            #region 家政服务类型
            //Dictionary sex = new Dictionary() { Id = "00000000-0000-0000-0009-000000000000".GetGuid(), ParentId = Guid.Empty, DictionName = "性别", DictionKey = "10009", DictionValue = "性别", Sequence = 1 };
            //Diction sexA = new Diction() { Id = "00000000-0000-0000-0009-000000000001".GetGuid(), ParentId = sex.Id, DictionName = "男", DictionKey = "10009001", DictionValue = "男", Sequence = 1 };
            //Diction sexB = new Diction() { Id = "00000000-0000-0000-0009-000000000002".GetGuid(), ParentId = sex.Id, DictionName = "女", DictionKey = "10009002", DictionValue = "女", Sequence = 1 };
            #endregion
            #endregion
        }
    }
}