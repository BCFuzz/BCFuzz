const v2 = new Uint32Array(1000);
for (let v3 in v2) {
    function f4(a5, a6, a7, a8) {
        v3++;
        return arguments;
    }
    f4(v3, v3, Uint32Array, 1000);
}
gc();
