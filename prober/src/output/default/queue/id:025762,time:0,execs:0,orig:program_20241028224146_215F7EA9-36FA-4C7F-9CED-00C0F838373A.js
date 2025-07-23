const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const o18 = {
                    toString(a10, a11) {
                        do {
                            536870888 >>> 4294967295;
                        } while (0 < 2)
                        return v3;
                    },
                };
            `;
            const v19 = v8.split(a6);
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
