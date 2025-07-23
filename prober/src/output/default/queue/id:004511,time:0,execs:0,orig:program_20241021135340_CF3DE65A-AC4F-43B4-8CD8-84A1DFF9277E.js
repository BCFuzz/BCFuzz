class C0 {
}
const v1 = new C0();
const t3 = v1.constructor;
const v3 = new t3();
function f4(a5, a6) {
    return a6;
}
v3.constructor = f4;
const v7 = v3.constructor;
const v10 = new Int32Array(256);
v10.sort(v7);
gc();
