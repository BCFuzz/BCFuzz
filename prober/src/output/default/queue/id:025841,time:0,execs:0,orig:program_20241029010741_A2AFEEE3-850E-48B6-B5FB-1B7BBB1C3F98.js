function f0() {
}
const v1 = f0.caller;
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                const v12 = Symbol.toPrimitive;
                const o16 = {
                    [v12]() {
                        const o15 = {
                            [v1]: 11,
                        };
                    },
                };
                /\u{12345}/myvis;
            `;
            const v18 = v10.split(a8);
            try { v18.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
