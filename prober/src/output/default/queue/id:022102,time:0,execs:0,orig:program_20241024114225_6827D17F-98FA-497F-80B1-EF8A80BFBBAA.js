class C0 {
}
const v1 = new C0();
function f2(a3) {
    const v5 = createGlobalObject();
    const v6 = v5.Float16Array;
    const v7 = new v6(v5, v6, C0, a3);
    v7.buffer.transferToFixedLength();
    return v7.indexOf();
}
v1.constructor = f2;
const v11 = v1.constructor;
try { v11(); } catch (e) {}
gc();
