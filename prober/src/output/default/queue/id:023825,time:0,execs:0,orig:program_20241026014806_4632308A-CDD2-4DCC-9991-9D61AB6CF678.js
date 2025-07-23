const o0 = {
};
class C1 {
    constructor(a3) {
        this.writable = a3;
        Reflect.defineProperty(o0, 127, this);
    }
}
const v7 = new C1();
const v8 = new C1(C1);
const t10 = v8.constructor;
new t10(v7);
gc();
