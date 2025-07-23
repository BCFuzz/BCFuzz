class C0 {
    constructor(a2) {
        const v4 = `
            -((-16 >>> -16) & a2) ** -16;
            /\u{12345}/myvis;
        `;
        const v11 = v4.split();
        try { v11.flatMap(eval); } catch (e) {}
    }
}
new C0();
gc();
