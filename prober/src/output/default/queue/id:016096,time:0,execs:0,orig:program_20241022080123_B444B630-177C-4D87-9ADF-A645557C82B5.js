for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const v17 = new SharedArrayBuffer();
    new Uint16Array(v17, v17, a13);
}
const v20 = new F11();
const v21 = v20.constructor;
try { new v21(3); } catch (e) {}
gc();
