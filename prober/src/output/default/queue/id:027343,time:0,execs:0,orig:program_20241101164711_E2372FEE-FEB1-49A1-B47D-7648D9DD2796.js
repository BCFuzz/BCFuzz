const v2 = new BigInt64Array(897);
const v4 = new BigInt64Array();
class C5 {
    constructor(a7) {
        const v9 = `
            const v10 = \`match${C5}getUint32\`;
            /\u{12345}/myvis;
            v2["filter"](897, v4, 512, BigInt64Array, v10);
        `;
        const v14 = v9.split();
        try { v14.flatMap(eval); } catch (e) {}
    }
}
new C5();
gc();
