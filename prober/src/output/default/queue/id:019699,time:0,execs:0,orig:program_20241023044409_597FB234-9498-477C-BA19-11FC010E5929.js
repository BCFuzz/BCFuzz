function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        for (let i16 = 0, i17 = 10;
            (() => {
                function f18() {
                    function f19(a20) {
                        const o27 = {
                            n(a22, a23) {
                                this[Symbol.toPrimitive] = f19;
                                for (let i = 0; i < 5; i++) {
                                    this[Symbol.toPrimitive] = a20;
                                }
                                return a22;
                            },
                        };
                        return o27;
                    }
                    const v28 = f19(i16);
                    const v29 = f19();
                    v29.valueOf = v29;
                    function f30(a31, a32) {
                        a31.n(a32, v28, i6, v29);
                        return i17;
                    }
                    f30(v28);
                    f30(v29);
                    return i16;
                }
                ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f18);
                return i16 < i17;
            })();
            i17--) {
        }
    }
}
new F0(F0, F0);
gc();
