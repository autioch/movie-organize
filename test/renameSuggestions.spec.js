/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai');

const testCases = require('./filenames');
const suggestRename = require('../src/suggestRename');

const cases = testCases.filter((testCase) => !testCase.skip);

describe('suggestRenames', () => {
  cases.forEach((testCase) => {
    describe(`for ${testCase.skip ? '_skipped_ ' : ''}'${testCase.old}'`, () => {
      it(`should suggest '${testCase.new}'`, () => {
        expect(suggestRename(testCase.old)).to.equal(testCase.new);
      });
    });
  });
});
