class C1 {
    constructor(a3) {
        const v5 = `
            ("-2132649582").matchAll(a3);
            /\u{12345}/myvis;
        `;
        v5.split(a3).flatMap(eval);
    }
}
try { new C1("-2132649582"); } catch (e) {}
gc();
