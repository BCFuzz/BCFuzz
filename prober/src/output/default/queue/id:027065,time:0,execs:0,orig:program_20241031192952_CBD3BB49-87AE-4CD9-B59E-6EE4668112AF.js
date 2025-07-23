const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const o18 = {
                    toString(a11, a12) {
                        async function* f13(a14, a15) {
                            await -1.5825043450841939e+308;
                            yield* true;
                            return a15;
                        }
                        return a6;
                    },
                };
            `;
            const v19 = v8.split(a6);
            v19.reverse();
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
