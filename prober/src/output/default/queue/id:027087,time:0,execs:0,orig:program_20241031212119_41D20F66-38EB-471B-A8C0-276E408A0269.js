const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                const v11 = Symbol.toPrimitive;
                const o21 = {
                    n(a13, a14, a15) {
                        return Symbol;
                    },
                    [v11]() {
                        function* f17(a18, a19, a20) {
                            yield* 9007199254740992n;
                            return f17;
                        }
                    },
                };
                /\u{12345}/myvis;
            `;
            const v23 = v9.split(a7);
            try { v23.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
