for (let v0 = 0; v0 < 100; v0++) {
    class C1 {
        #m(a3, a4) {
            const o7 = {
                "maxByteLength": 3439449941,
            };
            new SharedArrayBuffer(a3, o7);
        }
        constructor(a10) {
            this.#m();
        }
    }
    new C1();
}
gc();
