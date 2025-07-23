function f2() {
    return f2;
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F4(f2, f2, Date);
const v10 = v9.constructor;
const v12 = ("-13")[undefined];
function f13(a14, a15) {
    const v16 = a15.constructor;
    v16.prototype = v16;
    new v16();
    return "-13";
}
f13(v12, v9);
Object.defineProperty(v10, 0, { enumerable: true, get: f2, set: f13 });
const v20 = new BigUint64Array(257);
v20.filter(Date);
gc();
