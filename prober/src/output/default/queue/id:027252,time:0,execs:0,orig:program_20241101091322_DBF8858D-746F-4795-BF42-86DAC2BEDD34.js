function f3() {
    return 6;
}
SharedArrayBuffer[Symbol.toPrimitive] = f3;
const v6 = new SharedArrayBuffer(SharedArrayBuffer);
const v7 = new Uint16Array(v6);
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = new Uint8Array(v6);
    v13.set(v7);
}
new F8(v6, Uint16Array);
gc();
