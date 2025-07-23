const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const o13 = {
                    toString(a10, a11) {
                        for (let v12 = 0; v12 < 10; v12++) {
                        }
                    },
                };
            `;
            const v14 = v8.split(a6);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
