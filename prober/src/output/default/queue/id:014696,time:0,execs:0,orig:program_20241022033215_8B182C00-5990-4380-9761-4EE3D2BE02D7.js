class C7 {
    constructor(a9, a10, a11, a12) {
        for (let i = 0; i < 10; i++) {
            try { a10(4096, a10, this); } catch (e) {}
            new SharedArrayBuffer(a12);
        }
    }
}
const v15 = new C7();
new C7(1000, 4096, v15, 4294967296);
gc();
