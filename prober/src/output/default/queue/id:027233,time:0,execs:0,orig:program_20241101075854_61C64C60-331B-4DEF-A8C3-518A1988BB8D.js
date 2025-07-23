function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        for (let i16 = 0, i17 = 10;
            (() => {
                function f18() {
                    function f19(a20) {
                        const o24 = {
                            n(a22, a23) {
                                return this;
                            },
                        };
                        return o24;
                    }
                    const v25 = f19(a3);
                    const v26 = f19(v25);
                    v26.valueOf = v26;
                    function f27(a28, a29) {
                        a28.n();
                        return v26;
                    }
                    new Uint16Array(this, i7, a2);
                    f27(v25);
                    f27(v26);
                    return f27;
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
