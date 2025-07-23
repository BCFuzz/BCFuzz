class C1 {
    constructor(a3) {
        const v5 = `
            for (let v6 = 0; v6 < 5; v6++) {
                /\u{12345}/myvis;
            }
        `;
        const v8 = v5.split(a3);
        try { v8.flatMap(eval); } catch (e) {}
    }
}
new C1("l");
gc();
