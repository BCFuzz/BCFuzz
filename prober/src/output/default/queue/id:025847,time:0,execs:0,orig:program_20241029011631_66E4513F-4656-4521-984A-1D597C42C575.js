const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const v10 = Symbol.toPrimitive;
                const o15 = {
                    [v10]() {
                        const v13 = DataView(this);
                        v13.setBigUint64(v13, v10);
                    },
                };
                /\u{12345}/myvis;
            `;
            const v17 = v8.split(a6);
            try { v17.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
