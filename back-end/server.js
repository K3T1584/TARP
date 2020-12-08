const txttosl = require('txttosl-api');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
let port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('Ola amigos!!');
})

app.post('/msg', (req,res) => {
    let msg = req.body.msg;
    // let output="no output";
    console.log(req.body);
    // res.send('success i guess');
    txttosl.translate(msg, 'BSL').then((url) => {
        console.log(url);
        // output=url;
        res.send(url);
        // example output: https://v.txttosl.com/yirCaRNq.gif
      }).catch((e) => {
          console.log(e);
      });
})

app.listen(port);
console.log(`Server is up on port: ${port}`);
 
// txttosl.translate('Hello world!', 'BSL').then((url) => {
//   console.log(url);
//   // example output: https://v.txttosl.com/yirCaRNq.gif
// });