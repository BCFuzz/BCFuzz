function f1(a2) {
    return 796418.7022257384;
}
function f5() {
    return 5064;
}
SharedArrayBuffer[Symbol.toPrimitive] = f5;
const v8 = new SharedArrayBuffer(SharedArrayBuffer);
const v10 = new Float32Array(v8);
v10.toString = f1;
v10[146] = v10;
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = new Int16Array(v8);
    v16.set(v10);
}
new F11(SharedArrayBuffer, SharedArrayBuffer);
gc();
