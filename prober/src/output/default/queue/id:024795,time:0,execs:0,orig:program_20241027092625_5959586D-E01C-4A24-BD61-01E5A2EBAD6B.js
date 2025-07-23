function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        for (let [i31, i32] = (() => {
                function f9(a10, a11, a12) {
                    const v15 = new Uint32Array(1000);
                    for (const v16 in v15) {
                        for (let v17 = 0; v17 < 5; v17++) {
                            for (let i20 = 0, i21 = 10; i20 !== i21; i21--) {
                                let v28 = 1e-15;
                                arguments.f = arguments;
                                ({"length":v28,} = arguments);
                            }
                        }
                    }
                    return f9;
                }
                f9();
                return [0, 10];
            })();
            i31 != i32;
            i32--) {
        }
    }
}
new C1();
new C1();
gc();
