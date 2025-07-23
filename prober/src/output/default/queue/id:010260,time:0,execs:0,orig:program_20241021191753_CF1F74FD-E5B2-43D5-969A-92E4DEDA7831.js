const v1 = new Int8Array(Int8Array);
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F2(v1, v1, F2, v1);
v8.maxByteLength = v1;
const v10 = new ArrayBuffer(v8, v8);
const v12 = new DataView(v10);
try { v12.setBigUint64(v12, F2); } catch (e) {}
gc();
