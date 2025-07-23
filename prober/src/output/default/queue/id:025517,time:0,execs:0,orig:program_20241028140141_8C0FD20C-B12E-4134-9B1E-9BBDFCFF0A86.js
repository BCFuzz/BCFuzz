const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const v11 = Symbol.toPrimitive;
                    const o16 = {
                        [v11]() {
                            const v14 = [];
                            const o15 = {
                                [1000.0]: v14,
                            };
                        },
                    };
                    const o19 = {
                        get d() {
                            const o18 = {
                            };
                            return C4;
                        },
                    };
                    /\u{12345}/myvis;
                    return eval;
                }
            `;
            const v21 = v8.split(a6);
            try { v21.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
