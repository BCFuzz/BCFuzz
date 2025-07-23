function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2();
const v8 = new F2(undefined, v7, undefined);
function f10(a11, a12) {
    const v13 = a12.constructor;
    v13.prototype = v13;
    new v13();
    return v7;
}
const t11 = f10(undefined, v8).constructor;
t11.constructor = f10;
gc();
