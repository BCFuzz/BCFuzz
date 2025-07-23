const v1 = new Int32Array(Int32Array);
class C2 {
    constructor(a4, a5) {
        this.a = this;
        for (let i = 0; i < 5; i++) {
            const v8 = new Uint32Array(1000);
            for (const v9 in v8) {
            }
            this.a = v1;
        }
    }
}
for (let i = 0; i < 5; i++) {
    Reflect.construct(C2, [C2]);
}
gc();
