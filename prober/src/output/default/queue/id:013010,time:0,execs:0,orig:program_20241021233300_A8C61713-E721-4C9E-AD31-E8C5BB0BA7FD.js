class C0 {
}
const v1 = new C0();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    SharedArrayBuffer.maxByteLength = SharedArrayBuffer;
    const v6 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
    const v7 = new Uint8ClampedArray(v6);
    v7.set(v1);
}
new F2();
gc();
