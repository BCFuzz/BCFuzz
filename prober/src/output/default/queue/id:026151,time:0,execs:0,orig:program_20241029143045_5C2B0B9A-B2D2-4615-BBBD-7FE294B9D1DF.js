const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}/myvis;
                for (let i12 = 0, i13 = 10; i12 !== i13; i13--) {
                }
            `;
            const v20 = v8.split(a6);
            v20.reverse(v20, v3, v2, v20, a6);
            try { v20.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
