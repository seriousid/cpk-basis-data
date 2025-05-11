const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://raditya:<password>@cluster0.rqa7qbp.mongodb.net/";
const client = new MongoClient(uri);

async function runQueries() {
  try {
    await client.connect();
    const db = client.db("pariwisata");
    const daerah = db.collection("daerah");

    console.log("=== a. Wisata Pantai ===");
    const pantai = await daerah.find({ "wisata.kategori": "pantai" }).toArray();
    console.log(pantai);

    console.log("=== b. Wisata Kuliner ===");
    const kuliner = await daerah.find({ "wisata.kategori": "kuliner" }).toArray();
    console.log(kuliner);

    console.log("=== c. Bangunan Bersejarah / Museum ===");
    const sejarah = await daerah.find({ "wisata.kategori": { $in: ["bangunan bersejarah", "museum"] } }).toArray();
    console.log(sejarah);

    console.log("=== d. Wisata Gunung ===");
    const gunung = await daerah.find({ "wisata.kategori": "gunung" }).toArray();
    console.log(gunung);

    console.log("=== e. Wisata Sungai / Danau ===");
    const air = await daerah.find({ "wisata.kategori": { $in: ["sungai", "danau"] } }).toArray();
    console.log(air);

  } catch (err) {
    console.error("Terjadi kesalahan:", err);
  } finally {
    await client.close();
  }
}

runQueries();
