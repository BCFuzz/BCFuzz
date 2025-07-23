class C1 extends Date {
}
const v2 = new C1();
const v3 = v2.setYear();
function f4(a5) {
    const v7 = new Int8Array(v3, a5);
    v7.with(a5);
    return v2;
}
try { f4(v3); } catch (e) {}
gc();
