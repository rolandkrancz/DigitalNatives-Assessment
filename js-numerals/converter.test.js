import { converter } from "./converter";

test('dummy', () => {
    expect(converter(1)).toEqual('one');
})