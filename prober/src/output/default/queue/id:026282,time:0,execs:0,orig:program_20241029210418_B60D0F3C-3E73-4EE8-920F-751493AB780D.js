const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const o15 = {
                    stringify(a10, a11) {
                        with (Int16Array(this, 255, a6)) {
                            class C14 {
                            }
                        }
                        return this;
                    },
                };
            `;
            const v16 = v8.split(a6);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
