
const map=(data,actionType)=>{
    if(actionType=="cube"){
        var cubeOfData=new Array(data.length);
        for(let i=0;i<data.length;i++){
            cubeOfData[i]=data[i]*data[i]*data[i];
        }
        return cubeOfData;
    }
    if(actionType=="identity"){
        return data;
    }

    return data[0].x+1;
}
module.exports=map;