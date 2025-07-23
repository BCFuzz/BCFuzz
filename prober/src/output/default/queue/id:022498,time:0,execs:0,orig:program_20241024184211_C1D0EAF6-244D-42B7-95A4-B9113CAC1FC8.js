class C0 {
}
function f1(a2, a3) {
    this.constructor.getOwnPropertyDescriptor();
    return a2;
}
C0[Symbol.species] = f1;
class C9 extends C0 {
}
class C10 {
}
class C11 extends C10 {
}
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a17(C9, C9, F12, C9); } catch (e) {}
    const t16 = createGlobalObject().Float16Array;
    const v22 = new t16();
    v22.constructor = a17;
    v22.slice(C10, C9);
}
new F12(C10, C10, C11, F12);
gc();
