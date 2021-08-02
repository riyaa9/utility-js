const tail=require('./tail');
describe('Tail',()=>{
    it('Tail of an array of length 4 having 1,2,3,4',()=>{
    expect(tail([1,2,3,4])).toEqual([2,3,4]);
    });

    it('Tail of an array having 0 length',()=>{
    expect(tail([])).toEqual([]);
    });
})
