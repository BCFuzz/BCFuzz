const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}/myvis;
                const o18 = {
                    toString(a12, a13) {
                        async function* f14(a15, a16) {
                            return await -1.5825043450841939e+308;
                        }
                        return f14;
                    },
                };
            `;
            const v19 = v8.split(a6);
            v19.reverse(255, 255, v8, C4, Int8Array);
            v19.reverse();
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
