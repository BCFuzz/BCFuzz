for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    const v11 = createGlobalObject();
    gc();
    eval("");
    createGlobalObject();
    v11.Atomics;
}
gc();
