const min=(data)=>{
    data=data.reduce(getMinimum);
    return data;

}
const getMinimum=(x,y)=> Math.min(x,y);
module.exports=min;