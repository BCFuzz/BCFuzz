class C0 {
    constructor(a2) {
        this.value = this;
        Reflect.defineProperty(Uint8Array, 127, this);
    }
}
const v7 = new C0(C0);
new C0(v7);
gc();
