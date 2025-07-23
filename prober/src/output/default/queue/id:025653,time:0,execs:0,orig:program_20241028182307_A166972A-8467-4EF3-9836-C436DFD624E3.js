const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                let v10 = 0;
                while (v10 < 5) {
                    +255;
                    v10++;
                }
            `;
            const v15 = v9.split(a7);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
gc();
