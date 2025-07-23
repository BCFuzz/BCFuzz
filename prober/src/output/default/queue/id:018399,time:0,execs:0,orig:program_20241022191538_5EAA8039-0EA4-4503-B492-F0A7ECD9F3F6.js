const v1 = -49267775n << -49267775n;
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const v17 = new Int16Array(a15, a14, a14);
    const v18 = v17.copyWithin();
    const v21 = new ArrayBuffer(15);
    const v23 = new DataView(v21);
    v23.setFloat32(v18, a14);
}
const v25 = new F12();
const v26 = v25.constructor;
try { new v26(v1); } catch (e) {}
gc();
