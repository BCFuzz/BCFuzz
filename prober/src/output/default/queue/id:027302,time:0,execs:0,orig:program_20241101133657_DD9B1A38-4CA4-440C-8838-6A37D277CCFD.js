const v3 = Math.min("257", -1.0);
const v5 = `
    const o14 = {
        toString(a8, a9) {
            async function* f10(a11, a12) {
                await -1.5825043450841939e+308;
                return a8;
            }
            return eval;
        },
    };
`;
const v15 = v5.split(v3);
try { v15.flatMap(eval); } catch (e) {}
gc();
