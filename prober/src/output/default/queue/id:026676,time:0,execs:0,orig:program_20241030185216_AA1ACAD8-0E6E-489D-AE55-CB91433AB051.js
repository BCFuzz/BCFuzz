const v0 = [16,-65535,129,-10];
const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                const v11 = Symbol.toPrimitive;
                const o13 = {
                    [v11]() {
                        with (v0) {
                        }
                    },
                };
                /\u{12345}/myvis;
            `;
            const v15 = v9.split(a7);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
