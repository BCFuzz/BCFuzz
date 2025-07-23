class C0 {
    constructor(a2) {
        const v5 = `
            class C7 extends BigInt64Array {
                [new.target] = C0;
            }
            /\u{12345}/myvis;
        `;
        const v9 = v5.split();
        try { v9.flatMap(eval); } catch (e) {}
    }
}
new C0();
gc();
