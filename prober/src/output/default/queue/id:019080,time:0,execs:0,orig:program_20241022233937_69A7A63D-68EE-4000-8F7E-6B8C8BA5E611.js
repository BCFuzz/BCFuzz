for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    const v12 = new Uint8Array(8);
    for (let i15 = 0, i16 = 10; i16--, i15 < i16;) {
        createGlobalObject().Atomics.add(v12);
    }
}
gc();
