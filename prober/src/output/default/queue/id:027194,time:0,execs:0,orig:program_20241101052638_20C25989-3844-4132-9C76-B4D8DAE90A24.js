const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                const v10 = Uint32Array();
                C5[-2] = delete v10[v10];
            `;
            const v12 = v9.split(a7);
            v12[0] = v12;
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
