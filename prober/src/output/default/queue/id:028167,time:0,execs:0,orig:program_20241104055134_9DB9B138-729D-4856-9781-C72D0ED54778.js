const v1 = (-268435456).toLocaleString(-268435456, -268435456, -268435456, -268435456, -268435456);
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        const o31 = {
            n(a11, a12, a13) {
                const v14 = this;
                const v16 = v14.Intl.DateTimeFormat;
                function f17(a18) {
                    return v1;
                }
                const v20 = Symbol.toPrimitive;
                v16[v20] = f17;
                const o21 = {
                    __proto__: v16,
                };
                class C22 {
                    constructor(a24, a25) {
                        let v26;
                        try { v26 = a24(i5, i5, this); } catch (e) {}
                        const v27 = `object${v26}-1126020689${o21}boolean`;
                        this[v27] = v27;
                    }
                }
                const v28 = new C22(a11, v20);
                const t22 = v28.constructor;
                new t22(v16);
                return i4;
            },
        };
        for (let i34 = 0, i35 = 10; i35--, i34 < i35;) {
        }
        const t29 = o31.n;
        t29(o31, -268435456, v1);
    })()) {
}
gc();
