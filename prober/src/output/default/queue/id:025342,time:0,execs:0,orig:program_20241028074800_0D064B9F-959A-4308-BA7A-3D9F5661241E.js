const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        const o15 = {
            ..."number",
        };
        const o16 = {
        };
        class C17 {
            get c() {
                this.constructor(a2, a2);
            }
        }
        const v20 = new C17();
        function f21() {
            const o22 = {
                ...o15,
            };
            for (const v23 in o22) {
                o16[v23];
            }
            return f1;
        }
        v20.constructor = f21;
        return v20.c;
    }
    f1(v0, v0);
`;
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
    }
}
eval(v0).next();
gc();
