const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const v10 = (-899481457n).toString();
                const o16 = {
                    toString(a12, a13) {
                        switch (v10) {
                            default:
                                C4.trimEnd(4294967295);
                        }
                        return v2;
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
