class C1 extends Map {
    static a;
}
for (const v2 in C1) {
    class C3 {
        constructor(a5) {
            const v7 = `
                try {
                } catch(e8) {
                }
                /\u{12345}/myvis;
            `;
            const v10 = v7.split(a5);
            try { v10.flatMap(eval); } catch (e) {}
        }
    }
    new C3(v2);
}
gc();
