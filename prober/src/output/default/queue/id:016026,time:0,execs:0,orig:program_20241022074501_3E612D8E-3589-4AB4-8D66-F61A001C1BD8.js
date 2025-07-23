const v2 = new Uint32Array(1000);
for (const v3 in v2) {
    for (let i = 0; i < 5; i++) {
    }
    function f4(a5, a6, a7, a8) {
        return arguments;
    }
    const v10 = f4(v3, 1000, f4, v3);
    v10.length = v10;
    v10[1];
}
gc();
