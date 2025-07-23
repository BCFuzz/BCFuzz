class C0 {
}
function f1(a2, a3) {
    return C0;
}
C0[Symbol.species] = f1;
class C6 extends C0 {
}
class C7 {
}
class C8 extends C7 {
}
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a14(C6, C6, F9, C6); } catch (e) {}
    const t15 = createGlobalObject().Float16Array;
    const v19 = new t15();
    v19.constructor = a14;
    v19.slice(v19, f1, f1);
}
new F9(C7, C7, C8, F9);
gc();
