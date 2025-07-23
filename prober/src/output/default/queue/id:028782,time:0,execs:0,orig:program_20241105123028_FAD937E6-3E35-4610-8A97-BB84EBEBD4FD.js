class C0 {
    constructor(a2) {
        const v5 = `
            /\u{12345}/myvis;
            new.target();
        `;
        const v8 = v5.split();
        try { v8.flatMap(eval); } catch (e) {}
    }
}
new C0(C0);
gc();
