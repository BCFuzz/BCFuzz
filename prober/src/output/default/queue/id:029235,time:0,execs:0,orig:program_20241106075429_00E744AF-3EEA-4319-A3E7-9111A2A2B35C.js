class C0 {
    constructor(a2) {
        const v5 = `
            for (let i8 = 0, i9 = -65536;
                (() => {
                    new new.target(C0, eval, i9, eval);
                    return i8 < i9;
                })();
                ) {
            }
        `;
        const v16 = v5.split();
        try { v16.flatMap(eval); } catch (e) {}
    }
}
new C0();
gc();
