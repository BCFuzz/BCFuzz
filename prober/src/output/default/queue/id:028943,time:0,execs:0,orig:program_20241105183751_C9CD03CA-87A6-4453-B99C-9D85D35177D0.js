const v0 = `
    async function* f1(a2, a3) {
        const v7 = (undefined >>> undefined) >= 268435439;
        function f8(a9, a10, a11, a12) {
            return f1;
        }
        if (v7) {
        }
        return 268435439;
    }
    f1(f1, v0);
`;
const v15 = eval(v0);
v15.next(v0, v15, v15);
gc();
