class C1 {
}
const v2 = new C1();
v2.length = -1n;
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    try { new Uint32Array(v2); } catch (e) {}
}
new F4(-1n, v2, -1n, Uint32Array);
gc();
