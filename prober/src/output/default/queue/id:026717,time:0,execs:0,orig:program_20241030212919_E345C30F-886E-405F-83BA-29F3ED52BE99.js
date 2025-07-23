function f1() {
    return 3622;
}
SharedArrayBuffer.toString = f1;
const v3 = new SharedArrayBuffer(SharedArrayBuffer);
const v5 = new Int16Array(v3);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = new Uint8Array(v3);
    v11.set(v5);
}
new F6();
gc();
