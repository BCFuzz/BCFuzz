const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                const o16 = {
                    toString(a11, a12) {
                        /\u{12345}/myvis;
                        return v3 ? Float32Array : 1000;
                    },
                };
            `;
            const v17 = v9.split(a7);
            try { v17.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
