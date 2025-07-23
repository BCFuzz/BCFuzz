class C0 {
    constructor(a2, a3) {
        for (let v4 = 0; v4 < 37; v4++) {
            this.d = v4;
            delete this.d;
        }
    }
}
const v6 = new C0();
const v9 = new Uint32Array(1000);
for (const v10 in v9) {
    v6[2588];
}
gc();
