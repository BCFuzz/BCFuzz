const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    for (let i12 = 0, i13 = 10; i12 < i13;) {
                    }
                    return this;
                }
            `;
            const v19 = v8.split(a6);
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
