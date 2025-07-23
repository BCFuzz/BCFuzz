class C3 {
}
const v4 = new Uint32Array();
const v5 = new C3();
function f6(a7, a8, a9, a10) {
    try { a7(-2077331653, -65536, -65536); } catch (e) {}
    try { a8(a8, v5, a7); } catch (e) {}
    try { a9.map(); } catch (e) {}
    v4[v5];
    return v4;
}
for (let v15 = 0; v15 < 50; v15++) {
    f6(f6, f6, v4);
}
gc();
