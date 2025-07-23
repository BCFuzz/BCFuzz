const v0 = /[^P\cA]/mgu;
const v5 = new Int8Array(255);
for (const v6 in v5) {
    class C7 {
        constructor(a9) {
            const v11 = `
                const v12 = BigUint64Array < v0;
                /\u{12345}/myvis;
                new Set(v11, v12, ...255);
            `;
            const v15 = v11.split(a9);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C7(v6);
}
gc();
