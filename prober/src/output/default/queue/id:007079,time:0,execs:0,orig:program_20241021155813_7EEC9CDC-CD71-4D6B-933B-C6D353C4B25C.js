function f0(a1, a2, a3, a4) {
    const o15 = {
        toString(a6, a7) {
            class C9 {
                static toString(a11, a12) {
                    a11 <<= ("symbol").__proto__;
                }
            }
            class C14 {
                static [C9] = "symbol";
            }
            return a1;
        },
    };
    return o15;
}
let v16 = f0();
for (let i = 0; i < 5; i++) {
    const v17 = f0();
    -v17;
    v16 *= v17;
}
gc();
