const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                class C10 extends Uint8ClampedArray {
                }
                const v11 = C10.prototype;
                /\u{12345}/myvis;
                const o18 = {
                    toString(a14, a15) {
                        for (let v16 = 0; v16 < 5; v16++) {
                            v11[v16 + v16] = v16;
                        }
                        return Int8Array;
                    },
                };
            `;
            const v19 = v9.split(a7);
            v19.reverse();
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
