function f0() {
    const v3 = new Int16Array(1880);
    for (const v4 in v3) {
    }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        const v17 = createGlobalObject().Atomics;
        try { v17.load(v3, 1880); } catch (e) {}
        [-3.4035824229460824e+307,1000000000.0];
    }
    return Int16Array;
}
f0();
f0();
gc();
