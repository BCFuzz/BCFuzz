const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}/myvis;
                for (let v10 = 0; v10 < 5; v10++) {
                }
            `;
            const v11 = v8.split(a6);
            v11.reverse();
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
