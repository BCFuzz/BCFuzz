const v0 = `
    async function* f1(a2, a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            const v5 = v4 < v4;
            return a3;
            const v7 = v4--;
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = F8();
            class C15 {
            }
            const v17 = C15().constructor;
            let v18 = 10;
            const v20 = v17(a2, v5, a2, v18--);
            class C21 extends C15 {
            }
            const v23 = C21().constructor;
            v23(v14, v23, Date, v7, v20);
        }
        return f1;
    }
    f1();
`;
const v27 = eval(v0);
v27.next(eval, v27, eval);
gc();
