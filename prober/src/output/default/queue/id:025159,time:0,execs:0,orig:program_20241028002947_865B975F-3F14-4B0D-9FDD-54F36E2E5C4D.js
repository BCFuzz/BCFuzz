class C0 {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F1 {
}
const v4 = new C3();
const v5 = `
    async function* f6(a7, a8) {
        for (let [i13, i14] = (() => {
                function F11() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                return [0, 10];
            })();
            (() => {
                for (let i17 = 10, i18 = 10; -13369 < i18; i18--) {
                }
                return i13 < i14;
            })();
            i14--) {
            for (let i33 = 0, i34 = 10;
                i33 < i34;
                (() => {
                    i34--;
                    for (let v39 = 0; v39 < 5; v39++) {
                    }
                })()) {
                try {
                    class C42 {
                    }
                    class C43 extends C42 {
                    }
                    const t34 = C43().constructor;
                    BigInt.apply(t34(), [15957,-2,-128,-1,23328]);
                } catch(e50) {
                }
                for (let [i54, i55] = (() => {
                        class C52 extends C0 {
                        }
                        return [0, 10];
                    })();
                    i54 < i55;
                    (() => {
                        i55--;
                        class C60 {
                        }
                    })()) {
                }
            }
        }
        Object.getOwnPropertyNames(v4);
        class C65 {
            static set b(a67) {
            }
        }
        return f6;
    }
    f6();
`;
for (let i71 = 0, i72 = 10; i71 < i72; i72--) {
}
eval(v5).next();
gc();
