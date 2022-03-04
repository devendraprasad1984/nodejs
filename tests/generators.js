function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

num10_1 = makeRangeIterator(0, 10)
num20_2 = makeRangeIterator(0, 20, 2)

console.log(num10_1.next(), num10_1.next(), num10_1.next())
console.log(num20_2.next(), num20_2.next(), num20_2.next(), num20_2.next())