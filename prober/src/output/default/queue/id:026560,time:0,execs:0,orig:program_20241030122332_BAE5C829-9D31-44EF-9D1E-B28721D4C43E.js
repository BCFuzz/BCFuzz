const v2 = new Uint32Array(8);
function f3(a4, a5, a6, a7) {
    v2.toSorted(f3);
    return a4;
}
try { f3.call(v2, 8, v2, v2, f3); } catch (e) {}
gc();
