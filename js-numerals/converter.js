export function converter (num) {
    const SINGLES = ['','one','two','three','four','five','six','seven','eight','nine'];
    const TENS = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const TEENS = ['','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let result = '';
    let isFirstConversion = true;

    const ORDERS = [
        {value: 1000000000, word: 'billion'},
        {value: 1000000, word: 'million'},
        {value: 1000, word: 'thousand'},
        {value: 1, word: ''}
    ]

    const convertThreeDigit = (num) => {
        let result = '';
        const hundreds = Math.floor(num / 100);
        const remainder = num - (hundreds * 100);
        console.log(num);
        
        if(hundreds) {
            result += (SINGLES[hundreds] + ' hundred ');
            isFirstConversion = false;
        }
        if(remainder) {
            result += convertTwoDigit(remainder);
        }
        
        return result.trimEnd();
    }

    const convertTwoDigit = (num) => {
        let result = '';

        if(!isFirstConversion) result += 'and ';

        if(num < 10) result += SINGLES[num];
        else if(num % 10 === 0) result += TENS[num / 10];
        else if(num < 20) result += TEENS[num % 10];
        else result += TENS[Math.floor(num / 10)] + '-' + SINGLES[num % 10];
        isFirstConversion = false;

        return result;
    }
    
    ORDERS.forEach(order => {
        if(num >= order.value) {
            const group = Math.floor(num / order.value);
            result += convertThreeDigit(group);
            result += ` ${order.word} `;
            num -= (group * order.value);
        }
    })

    return result.trimEnd();
}
