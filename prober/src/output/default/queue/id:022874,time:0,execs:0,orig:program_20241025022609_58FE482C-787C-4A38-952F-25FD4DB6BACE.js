function f1() {
    const v4 = new Int16Array(1880);
    for (const v5 in v4) {
    }
    const v6 = [-5.0,1.3528388846609236e+308];
    for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
        const v19 = createGlobalObject().Atomics;
        try { v19.add(Float32Array, v6, v4); } catch (e) {}
    }
    return 1880;
}
f1();
f1();
gc();
