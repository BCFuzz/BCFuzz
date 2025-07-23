for (let i = 0; i < 5; i++) {
    for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
        const v11 = createGlobalObject();
        const v12 = v11.Atomics;
        class C13 {
        }
        try { v12.sub(createGlobalObject, i2, v11); } catch (e) {}
        for (let v15 = 0; v15 < 25; v15++) {
        }
    }
}
gc();
