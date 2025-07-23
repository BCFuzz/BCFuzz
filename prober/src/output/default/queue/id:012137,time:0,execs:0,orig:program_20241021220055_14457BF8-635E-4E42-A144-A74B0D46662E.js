class C0 {
    constructor(a2, a3, a4, a5) {
        const v7 = new BigInt64Array(a4, a4, a4);
        const v8 = `
            v7[89] &&= (1 / Infinity) ** Infinity;
        `;
        eval(v8);
    }
}
new C0();
gc();
