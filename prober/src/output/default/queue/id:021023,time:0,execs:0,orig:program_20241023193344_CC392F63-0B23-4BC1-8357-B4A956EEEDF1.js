const v1 = Array();
const v2 = `
    async function* f3(a4, a5) {
        for (let i8 = 0, i9 = 10;
            (() => {
                const v10 = i8 < i9;
                let v12 = v1.c;
                v12 ||= f3;
                for (let i14 = 10, i15 = 10; -13369 < i15; i15--) {
                }
                return v10;
            })();
            i9--) {
        }
        return Array;
    }
    f3(f3, Array);
`;
for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
    for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
    }
}
const v49 = eval(v2);
v49.next(eval, v49, Array, v1, v49);
gc();
