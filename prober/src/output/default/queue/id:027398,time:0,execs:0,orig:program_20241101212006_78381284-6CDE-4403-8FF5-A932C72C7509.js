function f0() {
    const v3 = new Uint8Array(1880);
    for (const v4 in v3) {
    }
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    }
    for (let i17 = 0, i18 = 10; i18--, i17 < i18;) {
        createGlobalObject().Atomics.load(v3, i17);
    }
    return 1880;
}
f0();
f0();
gc();
