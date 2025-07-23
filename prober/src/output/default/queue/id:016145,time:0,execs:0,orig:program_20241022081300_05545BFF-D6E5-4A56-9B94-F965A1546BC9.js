function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new Float32Array();
    const v4 = v3[0];
    const t3 = createGlobalObject().Float16Array;
    const v8 = new t3();
    v8.copyWithin(v3, v8, v4);
}
class C10 extends F0 {
}
new C10();
gc();
