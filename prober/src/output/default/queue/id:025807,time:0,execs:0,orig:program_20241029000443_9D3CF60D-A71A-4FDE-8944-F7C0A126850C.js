const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const v10 = /s\u{12345}\u{23456}e8ZgRe(?:a+)?Ja+?/mdiu;
                    async function* f11(a12, a13) {
                        return a6;
                    }
                    return v10;
                }
            `;
            const v14 = v8.split(a6);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
