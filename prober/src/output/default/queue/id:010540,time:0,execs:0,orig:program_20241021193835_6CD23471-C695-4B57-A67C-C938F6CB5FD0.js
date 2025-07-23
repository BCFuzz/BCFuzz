for (let i = 0; i < 5; i++) {
    for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
        const v11 = createGlobalObject();
        const v12 = v11.Atomics;
        try { v12.sub(createGlobalObject, i2, v11); } catch (e) {}
        for (let v14 = 0; v14 < 100; v14++) {
        }
    }
}
gc();
