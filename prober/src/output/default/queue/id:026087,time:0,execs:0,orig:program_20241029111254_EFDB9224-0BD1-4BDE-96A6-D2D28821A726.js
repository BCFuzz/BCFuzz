const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                const t5 = /\u{12345}/myvis;
                t5[8] &&= C4;
            `;
            const v10 = v8.split(a6);
            v10.reverse();
            try { v10.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
