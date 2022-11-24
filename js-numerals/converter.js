export function converter (num) {
    const SINGLES = ['','one','two','three','four','five','six','seven','eight','nine'];
    const TENS = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const TEENS = ['','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let result = '';

    const convertTwoDigit = (num) => {
        let result = '';

        if(num < 10) result = SINGLES[num];
        else if(num % 10 === 0) result = TENS[num / 10];
        else if(num < 20) result = TEENS[num % 10];
        else result = TENS[Math.floor(num / 10)] + '-' + SINGLES[num % 10];

        return result;
    }

    if(num < 100) {
        result += convertTwoDigit(num);
    }

    return result;
}