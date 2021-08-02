const filter=(data,actionType)=>{
    if(actionType=="true"){
    return data;
    }
    else if(actionType=="false"){
    var dataToBeReturned=new Array();
        return dataToBeReturned;
    }
    else if(actionType=="greaterThanOne"){
    var dataToBeReturned=new Array();
    let j=0;
        for(let i=0;i<data.length;i++){
            if(data[i]>1){
                dataToBeReturned[j]=data[i];
                j++;
            }}
            return dataToBeReturned;
    }
    else if(actionType=="filterUpperCase"){
        var dataToBeReturned=new Array();
        let j=0;
                for(let i=0;i<data.length;i++){
                    if(data[i].toUpperCase()==data[i]){
                        dataToBeReturned[j]=data[i];
                        j++;
                    }
                }
                return dataToBeReturned;
            }
            return data;
    }


module.exports=filter;