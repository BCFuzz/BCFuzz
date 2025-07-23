function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 10; v2++) {
        class C3 {
            constructor() {
                this.g = this;
            }
            set g(a6) {
                const o9 = {
                    "maxByteLength": 13,
                };
                const v11 = new ArrayBuffer(13, o9);
                new Uint32Array(v11);
            }
        }
        new C3();
    }
}
new F0();
gc();
