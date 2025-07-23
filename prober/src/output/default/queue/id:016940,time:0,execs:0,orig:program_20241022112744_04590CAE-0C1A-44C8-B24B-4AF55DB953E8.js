class C0 {
}
const v1 = new C0();
function f2() {
    return v1;
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F4();
const v10 = v9.constructor;
const v12 = ("-13")[undefined];
function f13(a14, a15) {
    const v16 = a15.constructor;
    v16.prototype = v16;
    new v16(a14, F4, "-13", a15);
    return v16;
}
f13(v12, v9);
Object.defineProperty(v10, 0, { enumerable: true, get: f2, set: f13 });
const v21 = this.constructor.freeze(v1);
v21[3] = v21;
gc();
