const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}/myvis;
                const o15 = {
                    toString(a12, a13) {
                        -1.5825043450841939e+308 >>> a13;
                        return this;
                    },
                };
            `;
            const v16 = v8.split(a6);
            v16.reverse(eval, a6);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
