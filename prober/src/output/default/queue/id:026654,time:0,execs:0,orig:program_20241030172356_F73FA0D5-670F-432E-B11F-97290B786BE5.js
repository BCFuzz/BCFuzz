const v2 = new Uint8ClampedArray(256);
class C3 {
    constructor(a5) {
        this.writable = a5;
        Reflect.defineProperty(v2, 127, this);
    }
}
new C3();
gc();
