const v0 = /(ab)\1/dygi;
const v1 = /((((.).).).)+/du;
function f2() {
    const v3 = delete v0.ignoreCase;
    let v4 = f2 % v3;
    [f2,v4,v4] = v3;
    return v0;
}
function f5(a6) {
    return f2;
}
Object.defineProperty(v1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f5 });
try { new BigInt64Array(v1); } catch (e) {}
gc();
