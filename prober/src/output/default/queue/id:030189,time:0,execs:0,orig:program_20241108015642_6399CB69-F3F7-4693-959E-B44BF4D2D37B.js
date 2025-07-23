for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v12 = new Int8Array(3043);
for (let v13 = 0; v13 < 5; v13++) {
    for (let i16 = 0, i17 = 10;
        i16 < i17;
        (() => {
            const v21 = i17--;
            for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
            }
            const v35 = createGlobalObject().Atomics.and(v12, v13, v21);
            v35 * v35;
            for (let i = 0; i < 5; i++) {
                for (let v37 = 0; v37 < 25; v37++) {
                    for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
                    }
                }
            }
        })()) {
    }
}
gc();
