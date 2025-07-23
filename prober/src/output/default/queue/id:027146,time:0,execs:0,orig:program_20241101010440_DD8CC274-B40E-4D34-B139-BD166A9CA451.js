let v0 = 5.0;
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                let v11 = "-789426228";
                ({"a":v0,"length":v11,} = "-970468186");
                /\u{12345}/myvis;
            `;
            const v13 = v10.split(a8);
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
