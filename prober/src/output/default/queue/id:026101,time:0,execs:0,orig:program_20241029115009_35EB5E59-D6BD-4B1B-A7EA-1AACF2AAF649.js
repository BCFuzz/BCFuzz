class C1 {
    constructor(a3) {
        const v5 = `
            switch (-2.0) {
            }
            /\u{12345}/myvis;
        `;
        const v7 = v5.split(a3);
        try { v7.flatMap(eval); } catch (e) {}
    }
}
new C1(-2.0);
gc();
