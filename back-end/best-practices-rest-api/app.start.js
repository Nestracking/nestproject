const app =  require('./app');

const uri = "mongodb://Kaillens:wafwafmiaou-2@ds223009.mlab.com:23009/arnaudscieur";

const db = mongoose.connect(uri, function (err, response) {
    if (err) { console.log(err); }
});

app.listen(process.env.PORT || 8014, async () => {
    console.log('waf waf 8014 waf waf');
});