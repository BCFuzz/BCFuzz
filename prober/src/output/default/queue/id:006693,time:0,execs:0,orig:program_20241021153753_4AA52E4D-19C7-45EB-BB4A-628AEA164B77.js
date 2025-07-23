class C4 {
}
const v5 = new Uint32Array();
const v6 = new C4();
function f7(a8, a9, a10, a11) {
    try { a8(-2077331653, -65536, -65536); } catch (e) {}
    try { a9(); } catch (e) {}
    try { a10.map(-3); } catch (e) {}
    v5[v6];
    let v16 = !-3;
    -3 >>> v16++;
}
for (let v19 = 0; v19 < 50; v19++) {
    f7(f7, f7);
}
gc();
