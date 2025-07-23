let v1;
try { v1 = Int32Array(); } catch (e) {}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new F4(Int32Array, Int32Array, F4, Int32Array);
const v12 = new ArrayBuffer(1000);
const v14 = new DataView(v12);
v14.setBigUint64(v10, "10", v1);
gc();
