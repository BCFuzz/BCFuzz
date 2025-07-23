const v3 = new Uint32Array();
function f4(a5, a6, a7, a8) {
    try { a5(-2077331653, -65536, a6); } catch (e) {}
    try { a6(a6); } catch (e) {}
    try { a7.map(); } catch (e) {}
    return -65536;
}
for (let v12 = 0; v12 < 5; v12++) {
    f4(v12, f4, v3);
}
gc();
