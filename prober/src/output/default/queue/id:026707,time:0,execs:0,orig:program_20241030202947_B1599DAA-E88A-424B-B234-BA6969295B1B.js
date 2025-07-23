const v0 = [16,-65535,129,-10];
const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                const v11 = Symbol.toPrimitive;
                const o16 = {
                    [v11]() {
                        with (v0) {
                            function F13(a15) {
                                if (!new.target) { throw 'must be called with new'; }
                            }
                        }
                    },
                };
                /\u{12345}/myvis;
            `;
            const v18 = v9.split(a7);
            try { v18.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
