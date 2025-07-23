const v1 = new Uint32Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        for (let i18 = 0, i19 = 10;
            (() => {
                function f20() {
                    function f21(a22) {
                        const o28 = {
                            n(a24, a25) {
                                for (let i = 0; i < 5; i++) {
                                    this[Symbol.toPrimitive] = a22;
                                }
                                return a24;
                            },
                        };
                        return o28;
                    }
                    const v29 = f21();
                    const v30 = f21();
                    v30.valueOf = v30;
                    function f31(a32, a33) {
                        v30[5] = a5;
                        const v34 = [f20];
                        [v34,Uint32Array,v34,v1];
                        Object.defineProperty(v34, 16, { enumerable: true, set: f20 });
                        return a32.n(F2, F2);
                    }
                    f31(v29);
                    f31(v30);
                    return v30;
                }
                ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f20);
                return i18 < i19;
            })();
            i19--) {
        }
    }
}
new F2(v1, v1);
gc();
