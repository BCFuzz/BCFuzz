for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let [i41, i42] = (() => {
        for (let i13 = 0, i14 = 10;
            i13 < i14;
            (() => {
                i14--;
                let v19 = 3043;
                const v21 = new Int32Array(v19);
                for (let [i25, i26] = (() => {
                        v19--;
                        return [0, 10];
                    })();
                    i25 < i26;
                    (() => {
                        i26--;
                        createGlobalObject().Atomics.and(v21, 0, v19);
                        for (let v35 = 0; v35 < 25; v35++) {
                        }
                    })()) {
                }
            })()) {
        }
        return [0, 10];
    })();
    (() => {
        i42--;
        const v44 = i41 < i42;
        for (let i47 = 0, i48 = 10; i47 < i48; i48--) {
        }
        return v44;
    })();
    ) {
}
gc();
