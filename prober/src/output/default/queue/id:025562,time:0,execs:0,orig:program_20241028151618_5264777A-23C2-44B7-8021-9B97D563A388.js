const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9(a10, a11) {
                    try {
                    } catch(e12) {
                        for (let v13 = 0; v13 < 5; v13++) {
                        }
                    }
                    return v2;
                }
            `;
            const v14 = v8.split(a6);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
