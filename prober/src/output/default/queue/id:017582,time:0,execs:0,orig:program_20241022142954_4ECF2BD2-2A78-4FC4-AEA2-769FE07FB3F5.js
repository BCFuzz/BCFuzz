for (let i2 = 0, i3 = 10;
    (() => {
        i3--;
        class C5 {
            #toString(a7) {
                for (const v8 in this) {
                }
            }
            constructor(a10) {
                a10.e = a10;
                try {
                    a10.#toString();
                } catch(e12) {
                }
            }
        }
        const v13 = new C5(C5);
        const t15 = v13.constructor;
        new t15(v13);
        return i2 < i3;
    })();
    ) {
}
gc();
