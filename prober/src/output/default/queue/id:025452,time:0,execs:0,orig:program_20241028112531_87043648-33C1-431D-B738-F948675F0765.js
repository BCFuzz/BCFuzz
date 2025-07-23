const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    return Int8Array;
                }
            `;
            const v10 = v8.split(a6);
            v10.shift(v2, v10, v10, C4);
            try { v10.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
