function f2(a3) {
    return 20828;
}
SharedArrayBuffer.toString = f2;
const v4 = new SharedArrayBuffer(SharedArrayBuffer);
const v6 = new Float32Array(v4);
v6[Symbol.toPrimitive] = f2;
v6[3] = v6;
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = new Uint16Array(v4);
    v14.set(v6);
}
const v16 = new F9(20828, v4);
const t14 = v16.constructor;
new t14();
gc();
