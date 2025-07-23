const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                class C11 extends 1073741823n {
                    static get h() {
                        super[3659];
                    }
                }
                /\u{12345}/myvis;
            `;
            const v15 = v10.split(a8);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
