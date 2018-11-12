var RandomIDgenerator={
    
    getRandomID:function(){
        console.log("Random ID generated successfully");
        return parseInt(100000 * Math.random()).toString();
    }
}
module.exports=RandomIDgenerator;