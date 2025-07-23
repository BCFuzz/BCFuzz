const v1 = Math.fround();
const v5 = new Int8Array(255);
for (const v6 in v5) {
    class C7 {
        constructor(a9) {
            const v11 = `
                class C12 extends 1073741823n {
                    static get h() {
                        const t8 = "-65535";
                        t8[657] /= v1;
                    }
                }
                /\u{12345}/myvis;
            `;
            const v16 = v11.split(a9);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C7(v6);
}
gc();
