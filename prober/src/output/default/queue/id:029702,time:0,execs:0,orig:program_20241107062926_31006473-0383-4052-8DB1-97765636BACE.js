const v1 = Symbol.__proto__;
const v3 = [-3.9583992670953316,816052.6974475158];
function f4(a5, a6, a7) {
    return a6;
}
const v8 = f4(v1, v3, f4);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    try { a14.constructor(v1); } catch (e) {}
}
Object.defineProperty(F9, "constructor", { enumerable: true, value: runString });
new F9(v3, f4, v8, F9);
gc();
