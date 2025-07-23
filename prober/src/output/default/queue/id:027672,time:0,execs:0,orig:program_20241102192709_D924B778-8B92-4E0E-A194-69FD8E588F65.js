const v2 = new Int8Array(256);
for (const v4 in v2) {
    class C5 {
        constructor(a7) {
            const v9 = `
                const o15 = {
                    [C5]() {
                        with (C5) {
                            function* f11(a12, a13, a14) {
                                yield* 9007199254740992n;
                                return a13;
                            }
                        }
                    },
                };
            `;
            const v16 = v9.split(a7);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();
