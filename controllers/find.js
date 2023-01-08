const fetch = require('node-fetch');

const search = async (req, res) => {

  let name = req.body.payload //remove trailing whitespace at first and at end using trim
  // console.log(payload)
  //let search = Animal.find({ name: { $regex: new RegExp('^' + payload + '.*', 'i') } }).exec();
  //if want limit search result use below
  // search=search.slice(0,5);
  name = name.trim();
  const arr = name.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
name=arr.join(" ");

  // console.log(name,'in controller');
  try {
    const where = encodeURIComponent(JSON.stringify({
      "name": {
        "$regex": name
      }
    }));
    const response = await fetch(
      `https://parseapi.back4app.com/classes/Animalslist_Animal?limit=2&order=name&where=${where}`,
      {
        headers: {
          'X-Parse-Application-Id': process.env.ap_id, // This is your app's application id
          'X-Parse-REST-API-Key': process.env.api_key, // This is your app's REST API key
        }
      }
    );
    const data = await response.json(); // Here you have the data that you need
    //  console.log(JSON.stringify(data, null, 2));
     const send=await data;
     res.status(200).json({ send })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      success:false,
      error:'we cant find animal'
      
     })
  } 
}
module.exports = {
  search,
}