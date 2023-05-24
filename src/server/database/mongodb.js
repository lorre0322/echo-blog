const { MongoClient, ObjectId } = require('mongodb')
const dbUrl = "mongodb://localhost:27017"

async function connectDatabase() {
  const options = { useNewUrlParser: true, useUnifiedTopology: true }
  const client = await MongoClient.connect(dbUrl, options)
  const dbName = new URL(dbUrl).pathname.substring(1)
  console.log(dbName);
  db = await client.db("ECHO")
}

function idHandler(datas) {
  for (const data of datas) {
    data.id = data._id.toString()
    delete data._id
  }
  return datas
}

module.exports = async () => {
  try {
    await connectDatabase()
    const databaseFn = {
      async findPage(name, skip, limit) {
        const res = await db.collection(name).find().sort({ _id: -1 }).skip(skip).limit(limit).toArray()
        return res
      },
      async findData(name, data) {
        if (data.id) {
          return await db.collection(name).find({ _id: new ObjectId(data.id) }).toArray()
        } else {
          const res = await db.collection(name).find().sort({ _id: -1 }).toArray()
          res.maxPage = Math.ceil(res.length / 3)
          return res
        }
      },
      async saveData(name, data) {
        if (data.id.length == 0) {
          return await db.collection(name).insertOne(data.content)
        } else {
          return await db.collection(name).updateOne({ _id: new ObjectId(data.id) }, { $set: data.content }, { upsert: true })
        }
      },
      async delData(name, data) {
        if (data.id.length == 0) {
          return
        } else {
          return await db.collection(name).deleteOne({ _id: new ObjectId(data.id) })
        }
      }
    }
    return databaseFn

  } catch (err) {
    console.log(err);
  }
}