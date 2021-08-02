const reduce=require('./reduce');
describe('Reduce',()=>{
    it('Reduce a array of length 3 to its sum',()=>{
        expect(reduce([1,2,3],"simpleSummation")).toEqual(6);
    })

    it('Reduce a array of length 0 to return undefined',()=>{
            expect(reduce([],"simpleSummation")).toEqual("undefined");
    })

    it('Reduce a array of length 3 with 10 already added',()=>{
                expect(reduce([1,2,3],"SummationWithAlreadyPresentElement")).toEqual(16);
    })
    it('Reduce a array of length 3 to its concatenation',()=>{
            expect(reduce(['a','b','c'],"simpleSummation")).toEqual("abc");
    })
    it('Reduce a array of length 3 to its concatenation with z',()=>{
                expect(reduce(['a','b','c'],"SummationWithAlreadyPresentElement")).toEqual("zabc");
    })




    })