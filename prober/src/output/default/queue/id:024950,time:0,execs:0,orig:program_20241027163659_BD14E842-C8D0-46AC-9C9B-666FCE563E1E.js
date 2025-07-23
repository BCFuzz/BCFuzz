const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            (() => {
                for (let i10 = 10, i11 = 10; -13369 < i11; i11--) {
                }
                return i6 < i7;
            })();
            i7--) {
            for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
                try {
                    class C34 {
                    }
                    class C35 extends C34 {
                    }
                    const t15 = C35().constructor;
                    BigInt.apply(t15(), [-1,9,4294967296,65536,10,49592,10]);
                } catch(e42) {
                }
                for (let i45 = 0, i46 = 10; i45 < i46; i46--) {
                }
            }
        }
        return a3;
    }
    f1();
`;
for (let i56 = 0, i57 = 10; i56 < i57; i57--) {
    for (let i66 = 0, i67 = 10; i66 < i67; i67--) {
    }
}
eval(v0).next();
gc();
