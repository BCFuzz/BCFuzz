function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
const v3 = new C2();
const v4 = `
    async function* f5(a6, a7) {
        for (let [i12, i13] = (() => {
                function F10() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                return [0, 10];
            })();
            (() => {
                for (let i16 = 10, i17 = 10; -13369 < i17; i17--) {
                }
                return i12 < i13;
            })();
            i13--) {
            for (let i32 = 0, i33 = 10;
                i32 < i33;
                (() => {
                    i33--;
                    for (let v38 = 0; v38 < 5; v38++) {
                    }
                })()) {
                try {
                    class C41 {
                    }
                    class C42 extends C41 {
                    }
                    const t32 = C42().constructor;
                    BigInt.apply(t32(), [15957,-2,-128,-1,23328]);
                } catch(e49) {
                }
                for (let i52 = 0, i53 = 10;
                    i52 < i53;
                    (() => {
                        i53--;
                        class C58 {
                        }
                    })()) {
                }
            }
        }
        Object.getOwnPropertyNames(v3);
        class C63 {
            static set b(a65) {
            }
        }
        return f5;
    }
    f5(f5, f5);
`;
for (let i69 = 0, i70 = 10; i69 < i70; i70--) {
}
eval(v4).next();
gc();
