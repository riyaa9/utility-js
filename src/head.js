const head=(arrayRecieved)=>{
    if(arrayRecieved.length!=0){
        return arrayRecieved[0];
    }
    return null;
}
module.exports=head;