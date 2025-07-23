const v0 = `
    async function* f1(a2, a3) {
        for (let [i10, i11] = (() => {
                try {
                } finally {
                    for (let v6 = 0; v6 < 5; v6++) {
                        ("p").padEnd();
                        const v9 = "p" + v6;
                        v9[1] = v9;
                    }
                }
                return [0, 10];
            })();
            i10 < i11;
            i11--) {
        }
        return a3;
    }
    f1();
`;
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
    for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
    }
}
eval(v0).next();
gc();
