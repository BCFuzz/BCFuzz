const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    function f11(a12, a13, a14, a15) {
                        let v16;
                        try { v16 = a15.substring(a6, a12); } catch (e) {}
                        ("B7RTZ").slice(v16);
                    }
                    return ("B7RTZ").slice().trimLeft();
                }
            `;
            const v20 = v8.split(a6);
            try { v20.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
