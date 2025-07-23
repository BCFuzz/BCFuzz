class C3 {
}
const v4 = new C3();
function f5(a6, a7) {
    const v9 = 2383 < (Uint16Array >>> 129);
    v9 && v9;
    return 2383;
}
v4.constructor = f5;
const v11 = v4.constructor;
for (let v12 = 0; v12 < 100; v12++) {
    v11();
}
gc();
