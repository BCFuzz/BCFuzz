class C0 {
    constructor(a2, a3) {
        const v4 = `
            for (let v5 = 0; v5 < 5; v5++) {
                this["p" + v5] = v5;
            }
            eval();
        `;
        eval(v4);
    }
}
new C0();
gc();
