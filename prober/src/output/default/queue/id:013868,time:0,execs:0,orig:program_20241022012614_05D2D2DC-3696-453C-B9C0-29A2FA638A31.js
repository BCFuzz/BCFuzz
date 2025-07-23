const v1 = 5n / 5n;
const v2 = [1000,-12,1228401035,2147483649,9007199254740992,1886882545,2,-9223372036854775807,2,65535];
const v4 = new Uint16Array(v2, v1, Uint16Array);
function f5() {
    return v1;
}
function f6(a7) {
    return a7;
}
Object.defineProperty(v4, Symbol.unscopables, { configurable: true, get: f5, set: f6 });
with (v4) {
    length = v2;
}
gc();
