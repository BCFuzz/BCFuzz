const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                class C10 extends Uint8ClampedArray {
                }
                const v11 = C10.hasInstance;
                const o17 = {
                    p(a13, a14) {
                        for (let v15 = 0; v15 < 5; v15++) {
                            v11[v15 + v15] = v15;
                        }
                        return a14;
                    },
                };
            `;
            const v18 = v9.split(a7);
            v18.reverse();
            try { v18.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
