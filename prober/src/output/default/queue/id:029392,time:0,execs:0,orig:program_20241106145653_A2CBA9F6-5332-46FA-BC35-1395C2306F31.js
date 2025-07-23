const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const v9 = \`
                    RegExp.$3;
                \`;
                const v13 = Symbol.iterator;
                const o18 = {
                    [v13]() {
                        const o17 = {
                            next() {
                                /\u{12345}/myvis;
                                return v8;
                            },
                        };
                    },
                };
            `;
            const v19 = v8.split(a6);
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
