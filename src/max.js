const max=(data)=>{
    data=data.reduce(getMaximum);
    return data;

}
const getMaximum=(x,y)=> Math.max(x,y);
module.exports=max;