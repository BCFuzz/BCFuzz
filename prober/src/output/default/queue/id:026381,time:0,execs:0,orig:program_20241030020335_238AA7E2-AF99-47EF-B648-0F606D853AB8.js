const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                try {
                } catch(e9) {
                    let v10 = 10;
                    v10--;
                }
                /\u{12345}/myvis;
            `;
            const v13 = v8.split(a6);
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
