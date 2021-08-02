const reduce=(data,actionType)=>{
    if(actionType=="simpleSummation"){
    if(data.length!=0){
        data=data.reduce(reducer);
        return data;
    }
    return "undefined";
    }
    else if(actionType=="SummationWithAlreadyPresentElement"){
    if(data.length!=0 &&  Number.isInteger(data[0])){
        data=data.reduce(reducer,10);

        return data;
    }
    else if(data.length!=0 &&  Number.isInteger(data[0])==false){
            data=data.reduce(reducer,'z');

            return data;
        }

    return data;
    }
}
const reducer=(x,y) => x+y;


module.exports=reduce;