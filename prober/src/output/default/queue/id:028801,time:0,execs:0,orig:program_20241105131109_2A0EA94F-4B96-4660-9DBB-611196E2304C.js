const v0 = `
    for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
    }
    async function* f11(a12, a13) {
        class C14 {
        }
        const v15 = new C14();
        const v16 = new C14();
        const v17 = v16[2991929872];
        const v18 = v16[2991929872];
        const v19 = [5,-9223372036854775808,-2,6,28443,9237,268435439,512];
        function f20() {
            return v17;
        }
        class C21 extends f20 {
        }
        for (let v22 in v19) {
            const v23 = v18 + v17;
            v22 += v23;
            v15[-2] = v23;
            C21[v22];
        }
        return v0;
    }
    f11(v0, f11);
`;
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
    for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
    }
}
eval(v0).next(eval, v0);
gc();
