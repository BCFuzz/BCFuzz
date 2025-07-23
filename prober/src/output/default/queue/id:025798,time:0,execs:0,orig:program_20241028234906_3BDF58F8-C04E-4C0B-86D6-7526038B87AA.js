class C1 {
    constructor(a3) {
        const v5 = `
            const o11 = {
                toString(a7, a8) {
                    class C10 extends BigInt64Array {
                    }
                    return BigInt64Array;
                },
            };
        `;
        const v12 = v5.split(a3);
        try { v12.flatMap(eval); } catch (e) {}
    }
}
new C1("d");
gc();
