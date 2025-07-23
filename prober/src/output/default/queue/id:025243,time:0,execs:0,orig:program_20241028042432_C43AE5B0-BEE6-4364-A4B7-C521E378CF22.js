const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f10(a11, a12, a13, a14) {
                    let v15;
                    try { v15 = a14.substring(a6); } catch (e) {}
                    return ("B7RTZ").slice(v15);
                }
            `;
            const v17 = v8.split(a6);
            try { v17.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
