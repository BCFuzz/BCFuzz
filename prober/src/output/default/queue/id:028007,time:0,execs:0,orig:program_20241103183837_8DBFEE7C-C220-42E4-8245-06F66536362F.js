const v1 = (-268435456).toLocaleString(-268435456, -268435456);
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        const o30 = {
            n(a11, a12, a13) {
                const v14 = this;
                const v16 = v14.Intl.DateTimeFormat;
                function f17(a18) {
                    return v1;
                }
                v16[Symbol.toPrimitive] = f17;
                const o21 = {
                    __proto__: v16,
                };
                class C22 {
                    constructor(a24, a25) {
                        for (let v26 = 0; v26 < 100; v26++) {
                        }
                        let v27;
                        try { v27 = a24(); } catch (e) {}
                        const v28 = `object${v27}-1126020689${o21}boolean`;
                        this[v28] = v28;
                    }
                }
                new C22();
                return i5;
            },
        };
        for (let i33 = 0, i34 = 10; i34--, i33 < i34;) {
        }
        const t28 = o30.n;
        t28(-268435456);
    })()) {
}
gc();
