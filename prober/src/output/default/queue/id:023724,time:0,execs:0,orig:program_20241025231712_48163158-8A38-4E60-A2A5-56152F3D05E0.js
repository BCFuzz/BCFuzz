const v1 = new Int32Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2(Int32Array, v1);
SharedArrayBuffer.maxByteLength = v6;
const v9 = new SharedArrayBuffer(Uint8ClampedArray, SharedArrayBuffer);
const v11 = v1.constructor;
try { new v11(v9, 31737); } catch (e) {}
gc();
