function f2(a3) {
    for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
    }
    return 20828;
}
SharedArrayBuffer.toString = f2;
const v14 = new SharedArrayBuffer(SharedArrayBuffer);
const v16 = new Float32Array(v14);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    const v22 = new Uint8ClampedArray(v14);
    v22.set(v16);
}
new F17();
gc();
