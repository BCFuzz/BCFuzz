function f0(a1) {
    return f0;
}
const v2 = f0.bind();
const v3 = v2.apply(f0, f0, v2, v2, v2);
class C4 {
    constructor(a6, a7) {
        this.a = v3;
        for (let i = 0; i < 5; i++) {
            const v10 = new Uint32Array(1000);
            for (const v11 in v10) {
            }
            this.a = this;
        }
    }
}
for (let i = 0; i < 5; i++) {
    Reflect.construct(C4, [C4,C4]);
}
gc();
