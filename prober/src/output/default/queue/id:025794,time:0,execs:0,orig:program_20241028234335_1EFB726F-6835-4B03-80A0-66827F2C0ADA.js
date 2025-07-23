const v1 = new Int8Array();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new SharedArrayBuffer();
    v1.buffer;
    const v8 = new Float32Array(v6);
    v8.set(v1);
}
new F2();
gc();
