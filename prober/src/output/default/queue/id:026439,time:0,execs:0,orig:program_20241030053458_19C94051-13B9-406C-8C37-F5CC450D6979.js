const v1 = new BigUint64Array();
const v6 = new Int8Array(255);
for (const v7 in v6) {
    class C8 {
        constructor(a10) {
            const v12 = `
                class C13 extends Uint8ClampedArray {
                    static [14] = v1;
                    static #f = BigUint64Array;
                }
                /\u{12345}/myvis;
            `;
            const v15 = v12.split(a10);
            v15.reverse();
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C8(v7);
}
gc();
