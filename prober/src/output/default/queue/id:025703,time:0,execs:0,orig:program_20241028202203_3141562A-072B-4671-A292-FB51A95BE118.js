const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                switch (a6) {
                    default:
                        function f9(a10) {
                            return f9;
                        }
                        for (let v11 = 0; v11 < 5; v11++) {
                        }
                        break;
                }
            `;
            const v12 = v8.split(a6);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
gc();
