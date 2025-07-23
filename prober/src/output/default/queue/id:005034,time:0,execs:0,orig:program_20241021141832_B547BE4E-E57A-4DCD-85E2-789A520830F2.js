function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
    }
    class C8 extends f7 {
    }
    class C9 extends Uint32Array {
    }
    const v10 = [536870889,-11,-2,536870888];
    v10.concat(C9, v10);
    for (let i16 = 0, i17 = 10;
        i16 < i17;
        (() => {
            i17--;
            for (let v22 = 0; v22 < 10; v22++) {
                function f23() {
                }
                class C24 extends f23 {
                }
                const v25 = [];
                function f26(a27, a28, a29, a30) {
                    const o31 = {
                        __proto__: v25,
                    };
                    try { o31.flatMap(C24); } catch (e) {}
                }
                f26();
                f26();
            }
        })()) {
        i16 /= 8;
    }
}
new F0();
gc();
