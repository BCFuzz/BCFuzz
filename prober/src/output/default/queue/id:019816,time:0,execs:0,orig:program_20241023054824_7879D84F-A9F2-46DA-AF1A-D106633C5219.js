function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        for (let i16 = 0, i17 = 10;
            (() => {
                function f18() {
                    function f19(a20) {
                        const o26 = {
                            n(a22, a23) {
                                for (let i = 0; i < 5; i++) {
                                    this[Symbol.toPrimitive] = f18;
                                }
                                return i16;
                            },
                        };
                        return o26;
                    }
                    const v27 = f19();
                    v27[Symbol.toPrimitive] = f19;
                    let v30 = undefined;
                    v27.n();
                    return v30 = f19;
                }
                ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f18);
                return i16 < i17;
            })();
            i17--) {
        }
    }
}
new F0();
gc();
