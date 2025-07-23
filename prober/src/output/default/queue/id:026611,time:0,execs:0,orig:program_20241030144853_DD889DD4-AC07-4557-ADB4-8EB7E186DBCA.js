const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
                }
            `;
            const v19 = v8.split(a6);
            v19.reverse();
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
for (let i25 = -3, i26 = 10; i25 < i26; i26--) {
}
gc();
