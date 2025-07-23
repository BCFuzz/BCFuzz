const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                1.7976931348623157e+308 < v9 ? 1.7976931348623157e+308 : v9;
            `;
            const v12 = v9.split(a7);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
