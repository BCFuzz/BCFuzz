const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}/myvis;
                1.7976931348623157e+308 - 1.7976931348623157e+308;
            `;
            v8.split(a6).flatMap(eval);
        }
    }
    try { new C4(v3); } catch (e) {}
}
gc();
