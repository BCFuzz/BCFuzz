const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const v10 = this[C4];
                    Int8Array();
                    return v10;
                }
            `;
            const v12 = v8.split(a6);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
