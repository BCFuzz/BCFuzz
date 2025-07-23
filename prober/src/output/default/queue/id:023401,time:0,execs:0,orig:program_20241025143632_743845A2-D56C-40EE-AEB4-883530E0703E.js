class C1 {
    #e = -8;
    constructor(a3) {
        const v4 = this.constructor;
        try { new v4(); } catch (e) {}
        this.#e = a3;
        const o6 = {
        };
    }
}
const v7 = new C1();
const v8 = new C1(v7);
const t12 = v8.constructor;
new t12();
new C1(v8);
class C12 extends C1 {
}
new C12();
gc();
