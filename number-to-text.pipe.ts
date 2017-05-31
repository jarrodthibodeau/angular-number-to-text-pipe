import { Pipe, PipeTransform } from '@angular/core';

interface NumbersObject {
    [key: number]: string,
    [key: string]: string
}

@Pipe({ name: 'numberToText' })
export class NumberToTextPipe implements PipeTransform {

    numbers: NumbersObject = {
        0: '',
        '00': '',
        '000': '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    transform(value: number | string) {
        let numberWords: Array<String> = [];

        if (typeof value !== 'string') {
            value = value.toString();
        }

        if (value.indexOf(',') > -1) {
            let re = new RegExp(',', 'g');
            value = value.replace(re, '');
        }

        let numLength = value.length,
            numberString = "",
            divide = Math.ceil(value.length / 3),
            splits = [];

        for (let i = 0; i < divide; i++) {
            if (value.length % 3 === 2) {
                splits.push([value[0], value[1]])
                value = value.substring(2);
            } else if (value.length % 3 === 1) {
                splits.push([value[0]]);
                value = value.substring(1);
            } else {
                splits.push([value[0], value[1], value[2]]);
                value = value.substring(3);
            }
        }

        switch (divide) {
            case 2: {
                numberWords = ['thousand']
                break;
            }
            case 3: {
                numberWords = ['million', 'thousand']
                break;
            }
            case 4: {
                numberWords = ['billion', 'million', 'thousand'];
                break;
            }
            case 5: {
                numberWords = ['trillion', 'billion', 'million', 'thousand'];
                break;
            }
        }


        for (let i = 0; i < splits.length; i++) {
            if (numberWords.length > 0) {
                switch (splits[i].length) {
                    case 1:
                        numberString += this.numbers[splits[i][0]] + ' ' + numberWords[0];
                        break;
                    case 2:
                        if (this.numbers[splits[i][0].toString() + splits[i][1].toString()] !== undefined) {
                            numberString += this.numbers[splits[i][0].toString() + splits[i][1].toString()] + ' ' + numberWords[0]; 
                        } else {
                            numberString += this.numbers[splits[i][0] + '0'] + ' ' + this.numbers[splits[i][1]] + ' ' + numberWords[0];
                        }
                        break;
                    case 3:
                         if (this.numbers[splits[i][0].toString() + splits[i][1].toString() + splits[i][2].toString()] !== undefined) {
                            numberString = numberString.substring(0, numberString.length - 1);
                            break;
                         } else if (this.numbers[splits[i][1].toString() + splits[i][2].toString()] !== undefined) {

                            //Need to properly handle spaces when its double 00's
                            if (splits[i][1].toString() + splits[i][2].toString() === '00') {
                                numberString += this.numbers[splits[i][0]] + ' hundred' + ' ' + numberWords[0];
                            } else {
                                numberString += this.numbers[splits[i][0]] + ' hundred ' + this.numbers[splits[i][1].toString() + splits[i][2].toString()]  + ' ' + numberWords[0];
                            }
                         } else {
                             numberString += this.numbers[splits[i][0]] + ' hundred ' + this.numbers[splits[i][1] + '0'] + ' ' + this.numbers[splits[i][2]]  + ' ' + numberWords[0];
                         }
                        break;
                }

                numberWords.shift();
                numberString += ' ';
            } else {
                switch (splits[i].length) {
                    case 1:
                        if (splits[i][0] === '0') {
                            numberString += 'zero';
                        } else {
                            numberString += this.numbers[splits[i][0]];
                        }

                        break;
                    case 2:
                        if (this.numbers[splits[i][0].toString() + splits[i][1].toString()] !== undefined) {
                            numberString += this.numbers[splits[i][0].toString() + splits[i][1].toString()]; 
                        } else {
                            numberString += this.numbers[splits[i][0] + '0'] + ' ' + this.numbers[splits[i][1]];
                        }

                        break;
                    case 3:
                         if (this.numbers[splits[i][0].toString() + splits[i][1].toString() + splits[i][2].toString()] !== undefined) {
                            numberString = numberString.substring(0, numberString.length - 1);
                            break;
                         } else if (this.numbers[splits[i][1].toString() + splits[i][2].toString()] !== undefined) {
                            numberString += this.numbers[splits[i][0]] + ' hundred ' + this.numbers[splits[i][1].toString() + splits[i][2].toString()]; 
                         } else {
                            numberString += this.numbers[splits[i][0]] + ' hundred ' + this.numbers[splits[i][1] + '0'] + ' ' + this.numbers[splits[i][2]];
                         }

                        break;
                }
            }
        }

        return numberString;
    }
}