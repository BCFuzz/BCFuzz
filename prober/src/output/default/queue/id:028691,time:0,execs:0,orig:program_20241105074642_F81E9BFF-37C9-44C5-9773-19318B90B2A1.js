class C0 {
}
const v1 = new C0();
function f2() {
    return Math.clz32();
}
v1.toString = f2;
const v6 = new SharedArrayBuffer(v1);
const v8 = new Int32Array(v6);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = new Uint8Array(v6);
    v14.set(v8);
}
new F9();
gc();
