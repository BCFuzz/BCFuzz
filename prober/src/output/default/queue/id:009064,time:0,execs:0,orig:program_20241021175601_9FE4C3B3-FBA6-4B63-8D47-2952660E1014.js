class C0 {
    constructor(a2, a3) {
        for (let i = 0; i < 5; i++) {
            const v6 = new Uint32Array(1000);
            for (const v7 in v6) {
            }
            this.a = this;
        }
    }
}
for (let i = 0; i < 10; i++) {
    Reflect.construct(C0, [Reflect,Reflect,Reflect]);
}
gc();
