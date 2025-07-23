class C0 {
}
const v1 = new C0();
v1.length = 2147483648;
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    try { new Uint32Array(v1); } catch (e) {}
}
new F4();
gc();
