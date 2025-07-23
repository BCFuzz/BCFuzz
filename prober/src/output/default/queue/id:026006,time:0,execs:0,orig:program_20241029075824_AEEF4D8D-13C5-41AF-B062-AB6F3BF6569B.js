const o1 = {
    "e": 2.2250738585072014e-308,
};
for (const v2 in o1) {
    class C3 {
        constructor(a5) {
            const v7 = `
                const o11 = {
                    toString(a9) {
                        for (let v10 = 0; v10 < 5; v10++) {
                        }
                        return a5;
                    },
                };
            `;
            const v12 = v7.split(a5);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C3(v2);
}
gc();
