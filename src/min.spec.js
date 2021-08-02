const min=require('./min');
describe('Min of data',()=>{
    it('Min',()=>{
    expect(min([1,2,3])).toEqual(1);
    });
})