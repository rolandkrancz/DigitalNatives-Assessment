import { SINGLES, TENS, TEENS, ORDERS, ERROR_INVALID_INPUT } from "./constants.js";

export function converter (num, englishStyle) {
    let result = '';
    const isBiggerThanThreeDigit = (num >= 1000);

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
            if(isBritishAndSpecial(num, englishStyle)) {
                result += getInBritish(num);
                num = 0;
            } else {
                const group = Math.floor(num / order.value);
                const lastThreeOfBigNum = isBiggerThanThreeDigit && num < 1000;
                result += getInAmerican(group, order.word, lastThreeOfBigNum);
                num -= (group * order.value);
            }
        }
    })

    return result.trimEnd();
}

const isBritishAndSpecial = (num, englishStyle) => {
    return (englishStyle === "british" && num > 1000 && num < 2000);
}

const getInBritish = (num) => {
    let result = '';

    const firstTwo = convertTwoDigit(Math.floor(num / 100));
    const secondTwo = convertTwoDigit((num % 100));
    result += firstTwo + ' hundred';
    if(secondTwo) result += ' and ' + secondTwo;

    return result;
}

const getInAmerican = (num, orderWord, lastThreeOfBigNum) => {
    return convertThreeDigit(num, lastThreeOfBigNum) + ` ${orderWord} `;
}

const convertThreeDigit = (num, lastThreeOfBigNum) => {
    let result = '';
    const hundreds = Math.floor(num / 100);
    const remainder = num - (hundreds * 100);
    
    if(hundreds) {
        result += (SINGLES[hundreds] + ' hundred ');
    } 
    if(remainder) {
        if(lastThreeOfBigNum || hundreds) result += 'and ';
        result += convertTwoDigit(remainder);
    }
    
    return result.trimEnd();
}

const convertTwoDigit = (num) => {
    let result = '';

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