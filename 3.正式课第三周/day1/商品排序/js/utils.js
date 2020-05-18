var utils = (function () {
    function toArray(likeAry) {
        var a=[];
        try{
            a=Array.prototype.slice.call(likeAry);
            console.log(ee);
            
        }catch(e){
            for(var i=0;i<likeAry.length;i++){
                a[i]=likeAry[i];
            }
        }
        return a;
    }
    function toJSON(str){

        
        return "JSON" in window ? JSON.parse(str):eval("("+str+")")
    }
    return {
        toArray,
        toJSON
    }
})()