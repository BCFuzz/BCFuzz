function f2(a3) {
    for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
    }
    return 20828;
}
SharedArrayBuffer.toString = f2;
const v14 = new SharedArrayBuffer(SharedArrayBuffer);
const v16 = new Float32Array(v14);
v16[Symbol.toPrimitive] = f2;
v16[4258] = v16;
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    const v24 = new Uint8ClampedArray(v14);
    v24.set(v16);
}
new F19(F19, 20828);
gc();
