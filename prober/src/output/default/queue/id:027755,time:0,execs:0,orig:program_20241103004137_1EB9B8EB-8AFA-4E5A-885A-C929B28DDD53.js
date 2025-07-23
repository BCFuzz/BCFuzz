class C1 {
    constructor(a3) {
        const v5 = `
            Object.defineProperty("getUTCDay", 5, { configurable: true, get: \`match${C1}getUint32\`, set: eval });
        `;
        const v7 = v5.split();
        try { v7.flatMap(eval); } catch (e) {}
    }
}
new C1("getUTCDay");
gc();
