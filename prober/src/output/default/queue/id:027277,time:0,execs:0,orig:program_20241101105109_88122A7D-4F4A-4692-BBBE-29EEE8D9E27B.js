class C0 {
    e;
}
const v1 = new C0();
for (const v3 in v1) {
    class C4 {
        constructor(a6) {
            const v8 = `
                class C9 {
                    constructor() {
                        switch (this) {
                            case 63560:
                                break;
                        }
                    }
                    /*
                    constructor(a12) {
                        /\u{12345}/myvis;
                    }
                    */
                }
            `;
            const v14 = v8.split(a6);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
