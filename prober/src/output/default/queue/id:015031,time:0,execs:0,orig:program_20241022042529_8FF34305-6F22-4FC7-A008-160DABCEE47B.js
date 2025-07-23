const v0 = [-128,64,1138455457,1649476695,1392829665];
function f1() {
    return f1;
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F3();
const v9 = v8.constructor;
const v11 = ("-13")[undefined];
function f12(a13, a14) {
    const v15 = a14.constructor;
    v15.prototype = v15;
    new v15("-13", v15, F3, a13);
    return F3;
}
f12(v11, v8);
Object.defineProperty(v9, 0, { enumerable: true, get: f1, set: f12 });
this.constructor.freeze(v0);
gc();
