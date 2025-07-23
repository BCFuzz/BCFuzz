const v1 = [BigInt64Array,BigInt64Array,BigInt64Array,BigInt64Array];
function f2() {
}
function f3(a4) {
    return a4;
}
Object.defineProperty(v1, "writable", { configurable: true, get: f2, set: f3 });
const v6 = new BigInt64Array(256);
Reflect.defineProperty(v6, 127, v1);
gc();
