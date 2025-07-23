const v0 = /xyz{1,32}(?:ab){4,7}?/dv;
const o1 = {
    "f": v0,
};
for (const v2 in o1) {
    class C3 {
        constructor(a5) {
            const v7 = `
                const o15 = {
                    toString(a9, a10) {
                        async function f11(a12, a13, a14) {
                            return a13;
                        }
                        return a10;
                    },
                };
            `;
            const v16 = v7.split(a5);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C3(v2);
}
gc();
