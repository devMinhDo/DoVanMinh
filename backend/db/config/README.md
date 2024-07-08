# Model #

## useMaster

The Sequelize query function has been overridden to set the default `useMaster` to true. All operations will be performed with the Write pool.

### Usage

Add `{useMaster: true}` to retrieve data from the Write Pool, and `{useMaster: false}` to retrieve data from the Read Pool.

| Name              |  Type   | Attribute                  | Description                                                          |
| :---------------- | :-----: | :------------------------- | -------------------------------------------------------------------- |
| options.useMaster | Boolean | Otional <br> Default: true | Force the query to use the write pool, regardless of the query type. |


Code example: 
```ts
const supportedVersion = await supportedVersionModel.findOne({
    where: { isActive: true },
    attributes: ['serverConfig'],
    raw: true,
    useMaster: true
});
  // or 

const supportedVersion = await sequelize.sequelize.query(
    `SELECT * FROM public."supportedVersions" ORDER BY id ASC`,
    { useMaster: true })
```


`useMaster` will not work if the operation involves writing data to the database. Those types include: `INSERT`, `UPDATE`, `BULKUPDATE`, `BULKDELETE`, `DELETE`, `UPSERT`, `RAW`.

All the mentioned Types, because they involve writing data to the database, will always use the write pool.

Code example: 
```ts
// Will not work ❌
await sequelize.sequelize.query(
    `INSERT INTO supportVersion(id, isActive, …)
    VALUES ('id-122', true, …);`,
    { useMaster: true, type: sequelize.QueryTypes.INSERT })

```

### Instructions for preparing replication for testing

Create a replication  from backenddb using the following command:
``` sql 
CREATE DATABASE [new database] WITH TEMPLATE backenddb OWNER dev;

```
* Note: Please make sure to disconnect from backenddb before proceeding.

Config replication in local
``` ts
replication: {
    read: [{
      host: 'localhost',
      port: 5432,
      username: 'dev',
      password: "localdev",
      database: "backenddb",
    }
    ],
    write: {
      host: 'localhost',
      port: 5432,
      username: 'dev',
      password: "localdev",
      database: "[new database]",
    }
  }
```


