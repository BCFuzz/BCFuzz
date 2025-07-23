class C0 {
    constructor(a2) {
        const v5 = `
            /\u{12345}/myvis;
            for (let i9 = 0, i10 = 10;
                (() => {
                    new new.target();
                    return i9 < i10;
                })();
                ) {
            }
        `;
        const v17 = v5.split();
        try { v17.flatMap(eval); } catch (e) {}
    }
}
new C0(C0);
gc();
