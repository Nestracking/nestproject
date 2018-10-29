const app =  require('./app'),
      Mongoose = require('mongoose'),
      uri = "mongodb://Kaillens:wafwafmiaou-2@ds223009.mlab.com:23009/arnaudscieur";


Mongoose.Promise = global.Promise;
Mongoose.connect(uri,(error)=>{
    if(error) throw error ;
    console.log('Mongo is now connected to our system please requests away');
});

app.listen(process.env.PORT || 8014, async () => {
    console.log('waf waf 8014 waf waf');
});