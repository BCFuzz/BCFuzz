function f0() {
    const v3 = new Int32Array(1880);
    for (const v4 in v3) {
    }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        createGlobalObject().Atomics.load(v3, i7);
    }
    return f0;
}
f0();
f0();
gc();
