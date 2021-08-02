const filter=require('./filter');
describe('Filter out',()=>{
    it('filter out if true is passed as 2nd argument',()=>{
    expect(filter([1,2,3],"true")).toEqual([1,2,3]);
    });

    it('filter out if false is passed as 2nd argument i.e return empty array',()=>{
        expect(filter([1,2,3],"false")).toEqual([]);
        });

    it('filter out if greater than one',()=>{
            expect(filter([1,2,3],"greaterThanOne")).toEqual([2,3]);
            });
    it('filter out if character is UpeerCase',()=>{
            expect(filter(['a','C','g','F'],"filterUpperCase")).toEqual(['C','F']);
            });
})