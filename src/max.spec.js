const max=require('./max');
describe('Max of data',()=>{
    it('Max',()=>{
    expect(max([1,2,3])).toEqual(3);
    });
})