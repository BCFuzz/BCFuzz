function f0() {
    let v1 = 1880;
    const v3 = new Uint32Array(v1);
    for (let v4 = 0; v4 < 100; v4++) {
        v1--;
    }
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        createGlobalObject().Atomics.load(v3, v1);
    }
    return f0;
}
f0();
f0();
gc();
