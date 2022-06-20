import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import fs from "fs";

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1

  app.get( "/filteredimage", async ( req, res ) => {
    console.log('dsad')
    if(req.query.image_url){

    }
    try {
      var a = await filterImageFromURL(req.query.image_url)
    a = __dirname + "\\util" + a; 

    res.sendFile(a, function (err) {
      if (err) {
        // var aab = [];
        // deleteLocalFiles(aab);
      } else {
        var aa = new Array;
        const files = fs.readdirSync(__dirname + "\\util\\tmp");
        //log them on console
        
        files.forEach(file => {
          aa.push(__dirname + "\\util\\tmp\\"+ file);
        });
           
        deleteLocalFiles(aa);
          }
        })
    } catch (error) {
      res.send("image url cannot receive")
    }
    
    // res.send("try GET /filteredimage?image_url={{}}")
    
  } );
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    console.log("vap")
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();