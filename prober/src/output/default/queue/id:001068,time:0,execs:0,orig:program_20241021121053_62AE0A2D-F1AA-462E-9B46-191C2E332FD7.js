function f0() {
    return f0;
}
const v2 = new BigInt64Array();
const v4 = new SharedArrayBuffer(BigInt64Array);
Object.defineProperty(v2, v4, { configurable: true, enumerable: true, get: f0 });
gc();
