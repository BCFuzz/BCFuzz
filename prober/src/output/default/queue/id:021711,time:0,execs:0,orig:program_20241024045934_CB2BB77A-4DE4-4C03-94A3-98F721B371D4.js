function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
SharedArrayBuffer.maxByteLength = v4;
const v7 = new SharedArrayBuffer(Uint8ClampedArray, SharedArrayBuffer);
const v9 = new Uint8ClampedArray(SharedArrayBuffer, 31737);
const v10 = v9.constructor;
try { new v10(v7, 31737); } catch (e) {}
gc();
