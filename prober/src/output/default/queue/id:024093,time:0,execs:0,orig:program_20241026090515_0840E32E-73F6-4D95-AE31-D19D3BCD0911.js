const v4 = new Uint32Array(1000);
for (const v5 in v4) {
    for (let i = 0; i < 5; i++) {
    }
    function f6(a7, a8, a9, a10) {
        a9.replace(4294967295, v5);
        try { a10(a9, 37937); } catch (e) {}
        return arguments[3];
    }
    f6(1000, v5, v5);
}
gc();
