const v1 = new BigUint64Array();
const v3 = new Float32Array();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
        for (let i20 = 0, i21 = 10;
            (() => {
                function f22() {
                    function f23(a24) {
                        const o29 = {
                            n(a26, a27) {
                                for (let v28 = 0; v28 < 5; v28++) {
                                    v1.toString = f23;
                                    v3[2] = v28;
                                }
                                return a27;
                            },
                        };
                        return o29;
                    }
                    const v30 = f23(i10);
                    v30.n();
                    return v30;
                }
                ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f22);
                return i20 < i21;
            })();
            i21--) {
        }
    }
}
new F4(v3, v3);
gc();
