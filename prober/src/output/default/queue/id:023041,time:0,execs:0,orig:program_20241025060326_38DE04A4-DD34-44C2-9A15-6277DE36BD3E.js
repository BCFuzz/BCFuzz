const v2 = new Uint32Array(1000);
for (const v3 in v2) {
    function f4(a5, a6, a7, a8) {
        for (let i = 0; i < 5; i++) {
            arguments.length ^= 1000;
        }
        return v3;
    }
    f4(f4, f4, 1000, Uint32Array);
}
gc();
