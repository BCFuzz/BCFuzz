function f1() {
    const v4 = new Int16Array(1880);
    for (const v5 in v4) {
    }
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        const v18 = createGlobalObject().Atomics;
        try { v18.load(v4, 1880); } catch (e) {}
        try { v18.store(Proxy); } catch (e) {}
    }
    return 1880;
}
f1();
f1();
gc();
