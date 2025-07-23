class C2 {
}
const v3 = new C2();
function f4(a5, a6) {
    const v8 = 0 >= (a5 >>> 129);
    v8 && (v8 || v8);
    return f4;
}
v3.constructor = f4;
const v11 = v3.constructor;
for (let v12 = 0; v12 < 100; v12++) {
    v11(0, v12, C2, v12, v12);
}
gc();
