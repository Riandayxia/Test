-----添加自定义表触发器
--IF (object_id('tgr_DBTable_add', 'TR') is not null)
--    drop trigger tgr_DBTable_add
--GO
--Create trigger tgr_DBTable_add
--ON  CDTable
--	For insert
--AS
--	DECLARE @TableId NVARCHAR(64);
--	Select @TableId=Id From inserted
--	Insert Into CDColumn(Id,TableId,Name,[Text],DBType,[IsNull],[Desc],Sort,IsDeleted,CreatedTime,LastUpdatedTime)
--	Values	(NEWID(),@TableId,'Id','唯一标识','uniqueidentifier',1,'',1,1,GETDATE(),GETDATE()),
--			(NEWID(),@TableId,'CreatedTime','创建时间','datetime',1,'',2,1,GETDATE(),GETDATE()),
--			(NEWID(),@TableId,'LastUpdatedTime','修改时间','datetime',1,'',3,1,GETDATE(),GETDATE()),
--			(NEWID(),@TableId,'IsDeleted','是否删除','bit',1,'',4,1,GETDATE(),GETDATE())
--GO
-----删除自定义表触发器
If (object_id('tgr_CDTable_Del', 'TR') is not null)
    Drop Trigger tgr_CDTable_Del
Go
Create Trigger tgr_CDTable_Del
On CDTable	
    For Delete --删除触发
As
	Delete dbo.CDColumn from CDColumn p,Deleted d where p.TableId=d.Id
GO	



select * from CDList

delete from CDList

select * from CDTable
select * from CDColumn

delete from CDColumn

select * from Test

Select * from Menu