const v2 = new Int32Array();
const v5 = new Int8Array(255);
for (const v6 in v5) {
    class C7 {
        constructor(a9) {
            const v11 = `
                switch (C7) {
                    case v11:
                        break;
                    case 255:
                        Set(v2);
                        break;
                }
                /\u{12345}/myvis;
            `;
            const v14 = v11.split(a9);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C7(v6);
}
gc();
