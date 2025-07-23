const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const o10 = {
                        __proto__: C4,
                    };
                    return o10;
                }
            `;
            const v11 = v8.split(a6);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
