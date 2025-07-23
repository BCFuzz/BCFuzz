const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                \`toUTCString${/\u{12345}/myvis}c\`;
                /\u{12345}/myvis;
            `;
            const v12 = v8.split(a6);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
