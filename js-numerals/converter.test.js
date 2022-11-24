import { converter } from "./converter";

test('1', () => {
    expect(converter(1)).toEqual('one');
})

test('7', () => {
    expect(converter(7)).toEqual('seven');
})

test('10', () => {
    expect(converter(10)).toEqual('ten');
})

test('12', () => {
    expect(converter(11)).toEqual('eleven');
})

test('20', () => {
    expect(converter(20)).toEqual('twenty');
})

test('21', () => {
    expect(converter(21)).toEqual('twenty-one');
})

test('99', () => {
    expect(converter(99)).toEqual('ninety-nine');
})

test('100', () => {
    expect(converter(100)).toEqual('one hundred');
})

test('200', () => {
    expect(converter(200)).toEqual('two hundred');
})

test('601', () => {
    expect(converter(601)).toEqual('six hundred and one');
})

test('999', () => {
    expect(converter(999)).toEqual('nine hundred and ninety-nine');
})

test('1000', () => {
    expect(converter(1000)).toEqual('one thousand');
})

test('1001', () => {
    expect(converter(1001)).toEqual('one thousand and one');
})

test('4400', () => {
    expect(converter(4400)).toEqual('four thousand four hundred');
})

test('9999', () => {
    expect(converter(9999)).toEqual('nine thousand nine hundred and ninety-nine');
})

test('1000000000', () => {
    expect(converter(1000000000)).toEqual('one billion');
})

test('32000000001', () => {
    expect(converter(32000000001)).toEqual('thirty-two billion and one');
})


// Examples

test('7', () => {
    expect(converter(7)).toEqual('seven');
})

test('42', () => {
    expect(converter(42)).toEqual('forty-two');
})

test('1999', () => {
    expect(converter(1999)).toEqual('one thousand nine hundred and ninety-nine');
})

test('2001', () => {
    expect(converter(2001)).toEqual('two thousand and one');
})

test('17999', () => {
    expect(converter(17999)).toEqual('seventeen thousand nine hundred and ninety-nine');
})

test('100001', () => {
    expect(converter(100001)).toEqual('one hundred thousand and one');
})

test('342251', () => {
    expect(converter(342251)).toEqual('three hundred and forty-two thousand two hundred and fifty-one');
})

test('1300420', () => {
    expect(converter(1300420)).toEqual('one million three hundred thousand four hundred and twenty');
})