const v1 = [16,-65535,129,-10];
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                const v12 = Symbol.toPrimitive;
                const o18 = {
                    [v12]() {
                        with (v1) {
                            function* f14(a15, a16, a17) {
                                yield* 9007199254740992n;
                                return this;
                            }
                        }
                    },
                };
                /\u{12345}/myvis;
            `;
            const v20 = v10.split(a8);
            try { v20.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
