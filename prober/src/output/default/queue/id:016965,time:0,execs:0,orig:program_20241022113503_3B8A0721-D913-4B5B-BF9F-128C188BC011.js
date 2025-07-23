function f0() {
    return f0;
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2(undefined, undefined, undefined);
const v8 = v7.constructor;
const v10 = ("-13")[undefined];
function f11(a12, a13) {
    const v14 = a13.constructor;
    v14.prototype = v14;
    new v14();
    return "-13";
}
f11(v10, v7);
Object.defineProperty(v8, 0, { enumerable: true, get: f0, set: f11 });
this.constructor.seal(v8);
gc();
