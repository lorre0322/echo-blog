const { MongoClient, ObjectId, ServerApiVersion } = require("mongodb")
const dbUrl = process.env.MONGODB_URL
// 连接数据库
async function connetMongo() {
  const client = new MongoClient(dbUrl, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  db = await client.db("echo")
}
// 把 _id 字段转换成 id
function idHandler(datas) {
  for (const data of datas) {
    data.id = data._id.toString()
    delete data._id
  }
  return datas
}
module.exports = async () => {
  try {
    await connetMongo()
    const mongoFn = {
      async findOne(name, data) {
        const { id } = data
        if (id) return await db.collection(name).findOne({ _id: new ObjectId(id) })
        return await db.collection(name).findOne(data)
      },
      async find(name, data) {
        return await db.collection(name).find(data).toArray()
      },
      async findPage(name, limit, skip, data) {
        const result = await db.collection(name).find(data)
          .sort({ top: -1, date: -1, _id: -1 })
          .limit(limit)
          .skip(skip)
          .toArray()
        return idHandler(result)
      },
      async saveData(name, data) {
        return await db.collection(name).insertOne(data)
      },
      async updateData(name, data) {
        console.log(data);
        return await db.collection(name).updateOne({ _id: new ObjectId(data.id) }, { $set: data.content }, { upsert: true })
      },
    }
    return mongoFn
  } catch (error) {
    console.log(error);
  }
}