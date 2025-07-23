function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1(F1, undefined);
class C6 {
}
const v7 = new C6();
function f8(a9, a10, a11) {
    gc.apply(v7, arguments);
    return v7;
}
f8(v5, v5, undefined, F1);
gc();
