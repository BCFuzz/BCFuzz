const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const o14 = {
                    toString(a10, a11) {
                        do {
                        } while (v8 < 2)
                        return Int8Array;
                    },
                };
            `;
            const v15 = v8.split(a6);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
