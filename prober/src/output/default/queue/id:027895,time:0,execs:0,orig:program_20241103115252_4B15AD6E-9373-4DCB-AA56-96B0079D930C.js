function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function f3() {
        const t3 = createGlobalObject().Float16Array;
        new t3(536870912);
        return F0;
    }
    f3();
    const o22 = {
        n(a12, a13, a14) {
            const v16 = new Uint8Array(3129);
            let v17 = 9;
            v17 /= 3129;
            for (const v18 in v16) {
                const v19 = v17 + v18;
                super[v19];
                super[v19];
            }
            return v17;
        },
    };
    const v23 = o22.n;
    v23(Uint8Array, F0, v23, Uint8Array);
    const o31 = {
        o(a26, a27, a28) {
            class C29 extends f3 {
            }
            new C29();
            return o22;
        },
    };
    o31.o();
}
const v33 = new F0();
new F0(v33);
for (let i37 = 0, i38 = 10; i38--, i37 < i38;) {
}
gc();
