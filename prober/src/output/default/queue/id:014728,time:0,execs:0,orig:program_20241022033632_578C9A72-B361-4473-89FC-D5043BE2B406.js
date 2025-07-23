class C3 {
    constructor(a5, a6, a7, a8) {
        for (let i = 0; i < 5; i++) {
            try { a6(); } catch (e) {}
            new Uint8Array(a8);
        }
    }
}
const v11 = new C3();
const t9 = v11?.constructor;
new t9(Uint16Array, v11, v11, 4294967296);
gc();
