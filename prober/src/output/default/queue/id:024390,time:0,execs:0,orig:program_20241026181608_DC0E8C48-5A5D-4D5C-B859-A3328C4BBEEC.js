const v1 = new Int8Array();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F3();
SharedArrayBuffer.maxByteLength = v7;
const v9 = new SharedArrayBuffer(v1, SharedArrayBuffer);
try { new Int8Array(v9, 5); } catch (e) {}
for (let i13 = 0, i14 = 10; i13 !== i14; i14--) {
}
gc();
