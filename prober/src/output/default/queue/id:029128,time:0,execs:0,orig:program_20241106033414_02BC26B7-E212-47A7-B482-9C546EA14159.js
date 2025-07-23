const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}/myvis;
                const o13 = {
                    toString(a11) {
                        return /7\xed\xa0\x80/vs;
                    },
                };
            `;
            const v14 = v8.split(a6);
            v14.reverse(v3, C4, Int8Array, v14, this);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
