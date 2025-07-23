class C4 {
    constructor(a6, a7, a8, a9) {
        for (let i = 0; i < 5; i++) {
            const v10 = `
                function f11(a12, a13) {
                    return 4294967296;
                }
                class C14 {
                }
                new C14();
            `;
            eval(v10);
            new Uint8Array(a9);
        }
    }
}
const v19 = new C4(4294967296, C4, 4294967296, C4);
const v20 = new C4(1000, -9007199254740991, v19, 4294967296);
const t18 = v20.constructor;
new t18();
gc();
