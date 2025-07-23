for (let v1 = 0; v1 < 37; v1++) {
    SharedArrayBuffer.d = v1;
    delete SharedArrayBuffer.d;
}
const v3 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
v3.slice();
gc();
