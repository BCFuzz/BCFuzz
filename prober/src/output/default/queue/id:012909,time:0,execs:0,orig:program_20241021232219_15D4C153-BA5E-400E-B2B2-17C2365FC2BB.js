const v2 = new SharedArrayBuffer(586);
const v4 = new DataView(v2);
v4.getFloat32(v4, SharedArrayBuffer);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const t5 = createGlobalObject().Float16Array;
    const v16 = new t5();
    const v17 = v16.subarray();
    try { v17.set("p", createGlobalObject); } catch (e) {}
}
new F6();
gc();
