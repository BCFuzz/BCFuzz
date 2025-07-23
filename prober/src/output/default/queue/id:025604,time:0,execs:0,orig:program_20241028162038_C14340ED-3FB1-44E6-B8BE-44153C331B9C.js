const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            (() => {
                for (let i10 = 10, i11 = 10; -13369 < i11; i11--) {
                }
                return i6 < i7;
            })();
            i7--) {
            for (let i26 = 0, i27 = 10;
                i26 < i27;
                (() => {
                    i27--;
                    const v34 = new WeakMap();
                    function f35(a36) {
                        return isNaN;
                    }
                    v34.constructor = f35;
                    const v38 = v34.constructor;
                    class C39 extends v38 {
                        [-1.7976931348623157e+308] = v38;
                    }
                    new C39();
                })()) {
                for (let i45 = 0, i46 = 10; i45 < i46; i46--) {
                }
            }
        }
        return f1;
    }
    f1(v0, f1);
`;
for (let i56 = 0, i57 = 10; i56 < i57; i57--) {
}
eval(v0).next();
gc();
