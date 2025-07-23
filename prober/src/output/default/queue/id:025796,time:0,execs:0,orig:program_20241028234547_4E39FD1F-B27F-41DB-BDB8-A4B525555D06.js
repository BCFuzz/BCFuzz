const v2 = new Int8Array(6);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9(a10, a11) {
                    try {
                    } catch(e12) {
                    }
                    return a11;
                }
                /\u{12345}/myvis;
            `;
            const v14 = v8.split(a6);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
