function f0() {
    return f0;
}
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const o42 = {
    set b(a12) {
        for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
        }
        class C23 {
            p(a25) {
                function f27() {
                    f27 = eval;
                    return eval;
                }
                f27();
                const v32 = ([[4n,f27]]).toLocaleString();
                let v33 = eval;
                v33(v32);
                v33 = f0;
            }
        }
        class C35 extends C23 {
            constructor(a37, a38, a39) {
                super();
                try { this.p(a12, f0, a37); } catch (e) {}
            }
        }
        new C35(this, C35, C23);
    },
};
o42.b = o42;
gc();
