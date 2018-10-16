const BgRoute = "\x1b[45m\x1b[1m%s\x1b[0m";
const FgYellow = "\x1b[33m\x1b[1m";
const BgBlue = "\x1b[44m\x1b[1m\x1b[37m";
const star =()=>console.log(FgYellow,'*'.repeat(50));
const line =(obj)=>console.log(BgBlue,'-'.repeat(50),{obj});
const loc = (str) => {console.log(BgRoute,"hit "+ str); star();}

const { Dog, Rating } = require('./models')



module.exports = {
    index: (req,res)        => Dog.find({})
            .then(  result  => loc('create success')       || res.json( result ))
            .catch( error   => loc('create erroror',error) || res.json( error  ))
    ,
    newDog: (req,res)       => Dog.create(req.body)
            .then(  result  => loc('create success')   || res.json( result ))
            .catch( error   => loc('create erroror',error) || res.json( error  ))
    ,
    removeDog: (req,res)    => Dog.findByIdAndRemove(req.params.dogid)
            .then(  result  => loc('remove success')        || res.json( result ))
            .catch( error   => loc('remove erroror', error) || res.json( error  ))
    ,
    showDog: (req,res)      => Dog.findById(req.params.dogid)
            .then(  result  => loc('show success')        || res.json( result ))
            .catch( error   => loc('show erroror', error) || res.json( error ))
    ,  
    updateDog: (req,res)    => Dog.findByIdAndUpdate(req.params.dogid, req.body, { new:true, runValidators:true } )
            .then(  result  => loc('update success')         || res.json( result ))
            .catch( error   => loc('update erroror', error)  || res.json( error ))
    ,
    newRating: (req,res)    => Dog.findByIdAndUpdate(req.params.dogid, { $push: { ratings: req.body } }, { new:true, runValidators:true } )
            .then(  result  => loc('update success')         || res.json( result ))
            .catch( error   => loc('update erroror', error)  || res.json( error ))
}

