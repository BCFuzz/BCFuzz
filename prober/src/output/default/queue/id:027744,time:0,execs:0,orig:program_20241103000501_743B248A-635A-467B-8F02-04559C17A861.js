function f3() {
    return 5064;
}
SharedArrayBuffer[Symbol.toPrimitive] = f3;
const v6 = new SharedArrayBuffer(SharedArrayBuffer);
const v8 = new Float32Array(v6);
v8.fill(-3.0);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = new Uint8Array(v6);
    v15.set(v8);
}
const v17 = new F10(SharedArrayBuffer, f3);
const t13 = v17.constructor;
new t13();
gc();
