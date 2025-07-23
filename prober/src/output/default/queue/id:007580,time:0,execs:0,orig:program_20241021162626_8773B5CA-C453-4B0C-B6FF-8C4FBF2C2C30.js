function f0(a1, a2, a3, a4) {
    const o19 = {
        toString(a6, a7) {
            class C10 extends Uint16Array {
                #d = 1736;
                constructor(a12, a13) {
                    super();
                    class C14 {
                    }
                    const v15 = [];
                    const o17 = {
                        __proto__: v15,
                        [v15]() {
                        },
                    };
                }
            }
            new C10();
            return a2;
        },
    };
    o19.toString(o19, f0, f0, a2, o19);
    return o19;
}
let v21 = f0();
for (let i = 0; i < 5; i++) {
    v21 *= f0();
}
gc();
