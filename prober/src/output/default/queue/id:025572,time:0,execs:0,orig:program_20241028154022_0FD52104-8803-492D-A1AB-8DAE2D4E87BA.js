const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const o16 = {
                    toString(a10, a11) {
                        class C13 extends BigInt64Array {
                            static {
                                try {
                                } catch(e15) {
                                }
                            }
                        }
                        return eval;
                    },
                };
            `;
            const v17 = v8.split(a6);
            try { v17.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
