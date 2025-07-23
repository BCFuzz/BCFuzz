const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
const v2 = [Float32Array,Float32Array];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
        for (let i19 = 0, i20 = 10;
            (() => {
                function f21() {
                    function f22(a23) {
                        const o29 = {
                            n(a25, a26) {
                                for (let i = 0; i < 5; i++) {
                                    this[Symbol.toPrimitive] = f21;
                                }
                                return this;
                            },
                        };
                        return o29;
                    }
                    const v30 = f22(a5);
                    v1.valueOf = f22(v2);
                    let v32 = undefined;
                    v30.n(f21);
                    v32 = f22;
                    return i19;
                }
                ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f21);
                return i19 < i20;
            })();
            i20--) {
        }
    }
}
new F3(F3, v1);
gc();
