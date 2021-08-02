const head=require('./head');
describe('Head',()=>{
    it('Head of an array having length 4 and elements as 1,2,3,4',()=>{
    expect(head([1,2,3,4])).toEqual(1);
    });
})