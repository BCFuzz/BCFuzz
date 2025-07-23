const v2 = new Uint32Array(150);
for (let v3 = 0; v3 < 10; v3++) {
    for (const v4 in v2) {
        class C6 {
        }
        const v7 = new C6();
        const v8 = `
            const v9 = v7.h;
            const v11 = 10 & -4294967297;
            v11 | (v9 | -4294967297);
        `;
        eval(v8);
    }
}
gc();
