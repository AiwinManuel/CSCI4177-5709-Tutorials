const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://aiwinmanuel652:<password>@tutorial6.lysax6v.mongodb.net/?retryWrites=true&w=majority&appName=tutorial6';

// Database Name
const dbName = 'tutorial6';

const client = new MongoClient(url);

async function run() {
    try {
      await client.connect();
      console.log("Connected successfully to server");
  
      const db = client.db(dbName);
      const collection = db.collection('tutorial6');
  
      // Insert records
    const records = [
        { id: 1, first_name: 'Anthony', last_name: 'Hebbes', email: 'ahebbes0@dion.ne.jp', gender: 'Male', ip_address: '184.169.32.205' },
        { id: 2, first_name: 'Del', last_name: 'Gibbings', email: 'dgibbings1@naver.com', gender: 'Male', ip_address: '231.110.21.135' },
        { id: 3, first_name: 'Eb', last_name: 'Schorah', email: 'eschorah2@tinyurl.com', gender: 'Genderqueer', ip_address: '238.211.27.77' },
        { id: 4, first_name: 'Riannon', last_name: 'Kasher', email: 'rkasher3@technorati.com', gender: 'Female', ip_address: '189.252.74.140' },
        { id: 5, first_name: 'Sheena', last_name: 'Kynvin', email: 'skynvin4@arizona.edu', gender: 'Female', ip_address: '96.65.207.171' },
        { id: 6, first_name: 'Linn', last_name: 'Alster', email: 'lalster5@ucla.edu', gender: 'Female', ip_address: '91.133.66.124' },
        { id: 7, first_name: 'Audry', last_name: 'Drains', email: 'adrains6@arizona.edu', gender: 'Female', ip_address: '2.122.193.99' },
        { id: 8, first_name: 'Shay', last_name: 'Geeson', email: 'sgeeson7@desdev.cn', gender: 'Male', ip_address: '59.63.116.241' },
        { id: 9, first_name: 'Marlo', last_name: 'Coxen', email: 'mcoxen8@irs.gov', gender: 'Female', ip_address: '76.189.86.52' },
        { id: 10, first_name: 'Kane', last_name: 'Yurkin', email: 'kyurkin9@zimbio.com', gender: 'Male', ip_address: '249.197.30.208' },
        { id: 11, first_name: 'Dora', last_name: 'Littlechild', email: 'dlittlechilda@shinystat.com', gender: 'Female', ip_address: '252.154.27.216' },
        { id: 12, first_name: 'Read', last_name: 'Bonar', email: 'rbonarb@webeden.co.uk', gender: 'Polygender', ip_address: '171.29.229.89' },
        { id: 13, first_name: 'Sherm', last_name: 'Kingham', email: 'skinghamc@webeden.co.uk', gender: 'Male', ip_address: '112.5.105.186' },
        { id: 14, first_name: 'Janaya', last_name: 'Goodlud', email: 'jgoodludd@gravatar.com', gender: 'Female', ip_address: '37.209.90.219' },
        { id: 15, first_name: 'Wakefield', last_name: 'Bischof', email: 'wbischofe@ihg.com', gender: 'Male', ip_address: '201.191.83.49' },
        { id: 16, first_name: 'May', last_name: 'Brearton', email: 'mbreartonf@google.fr', gender: 'Female', ip_address: '150.155.107.90' },
        { id: 17, first_name: 'Merrile', last_name: 'Bransom', email: 'mbransomg@yale.edu', gender: 'Female', ip_address: '45.116.146.117' },
        { id: 18, first_name: 'Marrissa', last_name: 'Cliss', email: 'mclissh@163.com', gender: 'Female', ip_address: '71.148.115.90' },
        { id: 19, first_name: 'Nealson', last_name: 'Comsty', email: 'ncomstyi@prlog.org', gender: 'Male', ip_address: '235.92.98.143' }
    ];

    const insertResult = await collection.insertMany(records);
    console.log(`${insertResult.insertedCount} records inserted`);

    // Display all records
    const findResult = await collection.find({}).toArray();
    console.log("All records:", findResult);

    const id = 1; 
    const newFirstName = 'UpdatedName'; 
    const updateResult = await collection.updateOne(
      { id: id },
      { $set: { first_name: newFirstName } }
    );
    console.log(`${updateResult.matchedCount} document(s) matched the filter, updated ${updateResult.modifiedCount} document(s)`);

    // Display updated record
    const updatedDocument = await collection.findOne({ id: id });
    console.log("Updated Document:", updatedDocument);

  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    // Close the connection to the MongoDB client
    await client.close();
  }
}

run().catch(console.dir);