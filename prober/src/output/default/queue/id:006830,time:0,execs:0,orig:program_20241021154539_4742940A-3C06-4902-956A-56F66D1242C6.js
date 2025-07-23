const v1 = 4294967296 >>> 4294967296;
function f2(a3, a4) {
    return v1;
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
function f7() {
    return f2;
}
Object.defineProperty(F5, "toString", { configurable: true, enumerable: true, get: f7 });
Date[Symbol.toPrimitive] = f2;
new Date(-1000000.0, F5, -1000000.0, F5, Date, F5);
gc();
