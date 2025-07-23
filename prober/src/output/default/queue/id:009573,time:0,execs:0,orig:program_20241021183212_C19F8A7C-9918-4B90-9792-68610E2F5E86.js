function f0(a1, a2, a3, a4) {
    return a2;
}
class C5 extends f0 {
}
new C5();
const v9 = new Int16Array(4096);
for (const v10 of v9) {
}
const v12 = new Uint8Array();
const v13 = [v9,v9];
function f14(a15, a16) {
    return f0;
}
const v18 = Date(4096);
function f20(a21, a22) {
    f14(v13, ...v12, v18, ...arguments);
}
Float32Array.toString = f20;
const t19 = SharedArrayBuffer.constructor;
t19(Float32Array);
gc();
