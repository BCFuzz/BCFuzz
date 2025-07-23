const v0 = `
    async function* f1(a2, a3) {
        for (let i5 = a2, i6 = 10; i5 < i6;) {
        }
        for (let v12 = 0; v12 < 5; v12++) {
            class C13 {
            }
            const v14 = new C13();
            v14.constructor;
            const v16 = new C13();
            const v17 = v16.constructor;
            v16.constructor;
            const t10 = v16.constructor;
            const v20 = new t10();
            const t14 = v20.constructor;
            const v22 = new t14(v17, v14, v14, a2);
            v22.constructor;
        }
        return a3;
    }
    f1(v0, v0);
`;
const v26 = eval(v0);
v26.next(v26, v26, v26);
gc();
