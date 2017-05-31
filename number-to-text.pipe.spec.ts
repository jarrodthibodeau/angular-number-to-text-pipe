import { NumberToTextPipe } from './number-to-text.pipe';

describe('Number to Text Pipe', () => {
    let numberToTextPipe: NumberToTextPipe;

    beforeEach(() => {
        numberToTextPipe = new NumberToTextPipe();
    });

    it('should convert 0 to zero', () => {
        expect(numberToTextPipe.transform(0)).toEqual('zero');
    });

    it('should convert 1 to one', () => {
        expect(numberToTextPipe.transform(1)).toEqual('one');
    });

    it ('should convert convert 12 to twelve', () => {
        expect(numberToTextPipe.transform(12)).toEqual('twelve');
    });

    it ('should convert 23 to twenty three', () => {
        expect(numberToTextPipe.transform(23)).toEqual('twenty three');
    });

    it ('should convert 123 to one hundred twenty three', () => {
        expect(numberToTextPipe.transform(123)).toEqual('one hundred twenty three');
    });

    it ('should convert 5000 to five thousand', () => {
        expect(numberToTextPipe.transform(5000)).toEqual('five thousand');
    });

    it ('should convert 5,000 to five thousand', () => {
        expect(numberToTextPipe.transform('5,000')).toEqual('five thousand');
    });

    it ('should convert 1234 to one thousand two hundred thirty four', () => {
        expect(numberToTextPipe.transform(1234)).toEqual('one thousand two hundred thirty four');
    });

    it ('should convert 54,567 to fifty four thousand five hundred sixty seven', () => {
        expect(numberToTextPipe.transform(54567)).toEqual('fifty four thousand five hundred sixty seven');
    });

    it ('should convert 354,567 to three hundred fifty four thousand five hundred sixty seven', () => {
        expect(numberToTextPipe.transform(354567)).toEqual('three hundred fifty four thousand five hundred sixty seven');
    });

    it ('should convert 1,254,567 to one million two hundred fifty four thousand five hundred sixty seven', () => {
        expect(numberToTextPipe.transform(1254567)).toEqual('one million two hundred fifty four thousand five hundred sixty seven');
    });

    it ('should convert 78,854,567 to seventy eight million eight hundred fifty four thousand five hundred sixty seven', () => {
        expect(numberToTextPipe.transform(78854567)).toEqual('seventy eight million eight hundred fifty four thousand five hundred sixty seven');
    });

    it ('should convert 113,454,567 to one hundred thirteen million four hundred fifty four thousand five hundred sixty seven', () => {
        expect(numberToTextPipe.transform(113454567)).toEqual('one hundred thirteen million four hundred fifty four thousand five hundred sixty seven');
    });

    it ('should convert 3,987,854,567 to three billion nine hundred eighty seven million eight hundred fifty four thousand five hundred sixty seven', () => {
        expect(numberToTextPipe.transform(3987854567)).toEqual('three billion nine hundred eighty seven million eight hundred fifty four thousand five hundred sixty seven');
    });

    it ('should convert 34,200,954,567 to thirty four billion two hundred million nine hundred fifty four thousand five hundred sixty seven', () => {
        expect(numberToTextPipe.transform(34200954567)).toEqual('thirty four billion two hundred million nine hundred fifty four thousand five hundred sixty seven');
    });

    it ('should convert 100,786,954,567 to one hundred billion seven hundred eighty six million nine hundred fifty four thousand five hundred sixty seven', () => {
        expect(numberToTextPipe.transform('100,786,954,567')).toEqual('one hundred billion seven hundred eighty six million nine hundred fifty four thousand five hundred sixty seven');
    });

    it ('should convert 1,000,000,000,000 to one trillion', () => {
        expect(numberToTextPipe.transform('1,000,000,000,000')).toEqual('one trillion');
    });
});