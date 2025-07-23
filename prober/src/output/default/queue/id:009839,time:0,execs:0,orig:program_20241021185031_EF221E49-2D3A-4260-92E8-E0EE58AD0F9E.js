class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
const v3 = new v2(v2, v2);
function f4(a5, a6) {
    a6--;
    return a6;
}
v3.constructor = f4;
const v8 = v3.constructor;
const v11 = new Int32Array(256);
v11.sort(v8);
gc();
