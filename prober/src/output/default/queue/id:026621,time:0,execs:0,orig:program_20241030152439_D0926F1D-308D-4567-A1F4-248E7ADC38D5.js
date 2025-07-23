const v0 = [1e-15];
const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                while ((() => {
                        const v10 = \`
                            2 >= 2;
                        \`;
                        return v0;
                    })()) {
                    a7 != eval;
                }
                /\u{12345}/myvis;
            `;
            const v15 = v9.split(a7);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
