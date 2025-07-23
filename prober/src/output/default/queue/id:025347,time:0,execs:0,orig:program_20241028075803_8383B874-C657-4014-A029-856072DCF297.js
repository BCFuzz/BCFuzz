function f0() {
    let v1 = 1880;
    const v3 = new Uint32Array(v1);
    v1--;
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        createGlobalObject().Atomics.load(v3, v1);
    }
    const v21 = new Uint8Array(3129);
    for (const v22 in v21) {
    }
    return f0;
}
f0();
gc();
