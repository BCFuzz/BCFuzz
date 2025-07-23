function f2() {
    return 5064;
}
SharedArrayBuffer[Symbol.toPrimitive] = f2;
const v5 = new SharedArrayBuffer(SharedArrayBuffer);
const v7 = new Float32Array(v5);
v7[311] = v7;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = new Int16Array(v5);
    v13.set(v7);
}
new F8();
gc();
