const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}/myvis;
                class C10 {
                    valueOf(a12, a13) {
                    }
                }
            `;
            const v14 = v8.split(a6);
            v14.reverse(C4);
            try { v14.flatMap(Function); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
