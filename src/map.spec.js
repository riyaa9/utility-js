const map=require('./map');
describe('Map',()=>{
    it('Map an array to get cube of an array of length 3',()=>{
    expect(map([1,2,3],"cube")).toEqual([1,8,27]);
    });

    it('Map an identity type for an array of length 3 i.e multiply each term by one',()=>{
        expect(map([5,10],"identity")).toEqual([5,10]);
    });

    it('Map an array to get cube of an array of length 0',()=>{
        expect(map([],"cube")).toEqual([]);
        });

    it('SomeObject an object having x as a parameter',()=>{
    //,someObject=>someObject.x+1
        expect(map([{x:10}],"")).toEqual(11);
    });

})