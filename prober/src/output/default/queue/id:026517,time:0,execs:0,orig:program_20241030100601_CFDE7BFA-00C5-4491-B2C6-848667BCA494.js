const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                ("-789426228").constructor;
                for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
                }
            `;
            const v21 = v8.split(a6);
            try { v21.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
