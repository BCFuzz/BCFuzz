for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        class C15 {
            #g;
            constructor(a17, a18, a19, a20) {
                for (let i23 = 0, i24 = 10;
                    i23 < i24;
                    (() => {
                        i24--;
                        super[a12] = BigInt64Array;
                    })()) {
                    this.#g;
                }
            }
        }
        new C15();
        return f11;
    }
    for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
    }
    f11(v10, f11);
`;
for (let i46 = 0, i47 = 10;
    (() => {
        for (let i50 = 0, i51 = 10; i51; i51--) {
        }
        return i46 < i47;
    })();
    i47--) {
}
const v64 = eval(v10);
v64.next(v64, eval, eval, eval);
gc();
