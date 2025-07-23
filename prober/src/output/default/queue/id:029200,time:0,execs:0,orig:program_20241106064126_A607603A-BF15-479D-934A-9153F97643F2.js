for (let i2 = 0, i3 = 10;
    i3;
    (() => {
        i3--;
        const o26 = {
            n(a8, a9, a10) {
                new Int16Array();
                const o23 = {
                    n(a16, a17, a18) {
                        createGlobalObject().Atomics.and(a18, a18, 9223372036854775807n);
                        return a8;
                    },
                };
                const v24 = o23.n;
                try { v24(undefined); } catch (e) {}
                return a9;
            },
        };
        for (let i29 = 0, i30 = 10; i30--, i29 < i30;) {
        }
        const t17 = o26.n;
        t17();
    })()) {
}
gc();
