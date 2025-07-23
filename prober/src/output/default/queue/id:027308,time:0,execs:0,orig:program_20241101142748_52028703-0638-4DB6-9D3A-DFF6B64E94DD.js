const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    return v3;
                }
                const o15 = {
                    o(a11, a12, a13) {
                        class C14 extends f9 {
                            44;
                        }
                    },
                };
                /\u{12345}/myvis;
            `;
            const v17 = v8.split(a6);
            v17.reverse();
            try { v17.flatMap(Function); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
