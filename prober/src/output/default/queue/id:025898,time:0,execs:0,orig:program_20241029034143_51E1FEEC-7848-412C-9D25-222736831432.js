for (let i3 = -3, i4 = 10; i3 <= i4; i4--) {
}
const v13 = new Int8Array(255);
for (const v14 in v13) {
    class C15 {
        constructor(a17) {
            const v19 = `
                function f20() {
                    const o21 = {
                        ...1000000000.0,
                    };
                    return this;
                }
            `;
            const v22 = v19.split(a17);
            try { v22.flatMap(eval); } catch (e) {}
        }
    }
    new C15(v14);
}
gc();
