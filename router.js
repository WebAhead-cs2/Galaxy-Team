const home=require('./handler/home');
const missing = require('./handler/missing');
const Alltype=require('./handler/type');
function router(request,response){
    const url=request.url;
    if(url=="/"){
      home(request,response);
    }
    else if(url.includes('public')){
        Alltype(request,response)
    }
    else{
        missing(request,response)
    }
}
module.exports=router;