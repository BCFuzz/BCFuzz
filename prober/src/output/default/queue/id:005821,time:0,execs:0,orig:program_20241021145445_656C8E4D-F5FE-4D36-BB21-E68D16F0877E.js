function f0(a1) {
    const o17 = {
        n(a3, a4) {
            for (let i = 0; i < 5; i++) {
                for (let v5 = 0; v5 < 250; v5++) {
                    v5++;
                    v5--;
                }
                const v9 = Symbol.toPrimitive;
                class C10 {
                }
                const v11 = new C10();
                function f12(a13, a14) {
                    const o15 = {
                        1073741824: v11,
                    };
                }
                f12();
                this[v9] = a1;
            }
            return this;
        },
    };
    return o17;
}
const v18 = f0(f0);
const v19 = f0(v18);
v19.n(v18, v19, v18, f0, v19);
v18.n(v19);
gc();
