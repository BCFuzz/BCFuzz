const v1 = new BigInt64Array();
function f3() {
    return BigInt64Array;
}
Object.defineProperty(String.prototype, 22255, { configurable: true, enumerable: true, value: f3 });
const v6 = v1.toString();
v6[22255] = v6;
gc();
