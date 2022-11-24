import { SINGLES, TENS, TEENS, ORDERS, ERROR_INVALID_INPUT } from "./constants.js";

export function converter (num) {
    let result = '';
    let isFirstConversion = true;

    /* Perform input checks */
    if(num === 0) {
        return 'zero';
    }
    if(num < 0) {
        result += 'minus ';
        num = Math.abs(num);
    }
    if(num % 1 != 0 || num === null || Math.abs(num) > 999999999999999) {
        return ERROR_INVALID_INPUT;
    }

    /* Perform conversion */
    ORDERS.forEach(order => {
        if(num >= order.value) {
            const group = Math.floor(num / order.value);
            result += convertThreeDigit(group, isFirstConversion);
            result += ` ${order.word} `;
            num -= (group * order.value);
            isFirstConversion = false;
        }
    })

    return result.trimEnd();
}

const convertThreeDigit = (num, isFirstConversion) => {
    let result = '';
    const hundreds = Math.floor(num / 100);
    const remainder = num - (hundreds * 100);
    
    if(hundreds) {
        result += (SINGLES[hundreds] + ' hundred ');
    } 
    if(remainder) {
        if(isFirstConversion && hundreds) result += 'and ';
        result += convertTwoDigit(remainder, isFirstConversion);
    }
    
    return result.trimEnd();
}

const convertTwoDigit = (num, isFirstConversion) => {
    let result = '';

    if(!isFirstConversion) {
        result += 'and ';
    }

    if(num < 10) {
        result += SINGLES[num];
    } else if(num % 10 === 0) {
        result += TENS[num / 10];
    } else if(num < 20) {
        result += TEENS[num % 10];
    } else {
        result += TENS[Math.floor(num / 10)] + '-' + SINGLES[num % 10];
    }

    return result;
}