for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v13 = new Int8Array(255);
for (const v14 in v13) {
    class C15 {
        constructor(a17) {
            const v19 = `
                const o24 = {
                    toString(a21, a22) {
                        eval("16");
                        return this;
                    },
                };
            `;
            const v25 = v19.split(a17);
            try { v25.flatMap(eval); } catch (e) {}
        }
    }
    new C15(v14);
}
gc();
