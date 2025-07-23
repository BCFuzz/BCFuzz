const v2 = new Uint32Array(1000);
for (const v3 in v2) {
    for (let i = 0; i < 5; i++) {
    }
    function f4(a5, a6, a7, a8) {
        try { a5.bind(v3, a6, a5); } catch (e) {}
        return arguments;
    }
    f4(f4, f4, v3);
}
gc();
