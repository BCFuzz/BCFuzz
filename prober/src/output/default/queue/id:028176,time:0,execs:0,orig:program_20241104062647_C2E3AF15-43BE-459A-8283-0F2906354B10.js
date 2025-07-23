const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    return f9;
                }
                const o15 = {
                    o(a11, a12, a13) {
                        class C14 extends f9 {
                            [-1];
                        }
                        return C4;
                    },
                };
            `;
            const v16 = v8.split(a6);
            v16.reverse();
            try { v16.flatMap(Function); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
