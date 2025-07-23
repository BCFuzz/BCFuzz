const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                let v9 = 1000000000.0;
                ++v9;
            `;
            const v11 = v8.split(a6);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
