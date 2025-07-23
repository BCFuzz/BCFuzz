class C2 {
    constructor(a4) {
        const v6 = `
            const o12 = {
                "maxByteLength": 135,
                toString(a8, a9) {
                    class C11 extends BigInt64Array {
                    }
                    return a8;
                },
            };
        `;
        const v13 = v6.split(a4);
        try { v13.flatMap(eval); } catch (e) {}
    }
}
new C2("d");
gc();
