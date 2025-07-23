const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}/myvis;
                try {
                } catch(e10) {
                }
            `;
            const v11 = v8.split(a6);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
    for (let i16 = -3, i17 = 512; i16 !== i17; i17--) {
    }
}
gc();
