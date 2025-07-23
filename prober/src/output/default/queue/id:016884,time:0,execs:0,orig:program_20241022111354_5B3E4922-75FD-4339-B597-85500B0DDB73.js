const v1 = new Set();
for (let v4 = 0; v4 < 100; v4++) {
    function f5(a6, a7, a8) {
        return a6.concat(a8);
    }
    try { f5(Uint32Array, Uint32Array, v1); } catch (e) {}
    f5("some", "some", Uint32Array);
}
gc();
