const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const v10 = [1386812739,-2076882812,10,43989];
                    function F11(a13, a14) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v15 = F11();
                    const o23 = {
                        [v15](a17, a18, a19) {
                        },
                        toString(a21, a22) {
                            return v10;
                        },
                    };
                    return this;
                }
            `;
            const v24 = v8.split(a6);
            try { v24.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
