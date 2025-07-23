const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const v10 = Symbol.toPrimitive;
                const o18 = {
                    [v10]() {
                        class C12 {
                            constructor(a14, a15) {
                            }
                            /*
                            constructor(a17) {
                            }
                            */
                        }
                    },
                };
                /\u{12345}/myvis;
            `;
            const v20 = v8.split(a6);
            try { v20.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
