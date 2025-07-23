class C1 {
    constructor(a3) {
        const v5 = `
            const v7 = Symbol.toPrimitive;
            const o10 = {
                [v7]() {
                    this instanceof a3;
                },
            };
            /\u{12345}/myvis;
        `;
        const v12 = v5.split(a3);
        try { v12.flatMap(eval); } catch (e) {}
    }
}
new C1("e");
gc();
