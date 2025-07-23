class C1 {
    constructor(a3) {
        const v5 = `
            for (let i7 = 0, i8 = 0;
                (() => {
                    const v9 = 255 < i8;
                    const v10 = \`
                        /\u{12345}/myvis;
                        \\\`toUTCString${C1}c\\\`;
                    \`;
                    return v9;
                })();
                ) {
            }
        `;
        const v17 = v5.split();
        try { v17.flatMap(eval); } catch (e) {}
    }
}
new C1();
gc();
