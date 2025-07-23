const v2 = new Int8Array();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F4();
SharedArrayBuffer.maxByteLength = v8;
const v10 = new SharedArrayBuffer(v2, SharedArrayBuffer);
try { new Uint16Array(v10, 2996); } catch (e) {}
for (let i14 = 0, i15 = 10; i14 !== i15; i15--) {
}
gc();
