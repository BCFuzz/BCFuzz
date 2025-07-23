function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1();
function f8(a9) {
    const v11 = new WeakSet(a9);
    const t6 = createGlobalObject().Float16Array;
    const v15 = new t6(F1);
    v15.copyWithin(v11, 512);
    return f8;
}
v7.constructor = f8;
const t12 = v7["valueOf"]().constructor;
t12();
gc();
