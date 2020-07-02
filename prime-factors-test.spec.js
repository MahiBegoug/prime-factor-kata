
const {expect} = require('chai')
var primeFactors = require('./PrimeFactors')

const makeTest = (number, actual) => {
    return () => {
        expect(primeFactors.PrimeFactors(number)).to.deep.equal(actual)
    }
}

describe('Prime Factors', () => {
     it('1 ==> []',makeTest(1,[]));
     it('2 ==> [2]',makeTest(2,[2]));
     it('3 ==> [3]',makeTest(3,[3]));
     it('4 ==> [2,2]',makeTest(4,[2,2]))
     it('5 ==> [5]',makeTest(5,[5]))
     it('6 ==> [2,3]',makeTest(6,[2,3]))
     it('7 ==> [7]',makeTest(7,[7]))
     it('15 ==> [3,5]',makeTest(15,[3,5]))
     it('20 ==> [2,2,5]',makeTest(15,[3,5]))
});