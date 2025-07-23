class C0 {
    constructor(a2) {
        const v5 = `
            /\u{12345}/myvis;
            for (let i9 = 0, i10 = 10;
                i9 < i10;
                (() => {
                    v5 >= new.target;
                    for (let v15 = 0; v15 < 5; v15++) {
                    }
                })()) {
            }
        `;
        const v18 = v5.split();
        try { v18.flatMap(eval); } catch (e) {}
    }
}
new C0();
gc();
