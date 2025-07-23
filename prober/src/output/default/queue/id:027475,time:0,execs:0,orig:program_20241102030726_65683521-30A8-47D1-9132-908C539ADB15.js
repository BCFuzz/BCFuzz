class C0 {
    h;
}
const v1 = new C0();
const v2 = [v1,v1];
const v4 = new Int8Array();
const v5 = v4.length;
for (const v6 in v1) {
    class C7 {
        constructor(a9) {
            const v11 = `
                if (v6 < v5) {
                    try { v2.indexOf(); } catch (e) {}
                }
                /\u{12345}/myvis;
            `;
            const v15 = v11.split(a9);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C7(v6);
}
gc();
