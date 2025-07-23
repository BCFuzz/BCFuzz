const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const v9 = \`
                    class C10 {
                    }
                    const v11 = \\\`
                    \\\`;
                \`;
                /\u{12345}/myvis;
            `;
            const v13 = v8.split(a6);
            v13.reverse();
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
