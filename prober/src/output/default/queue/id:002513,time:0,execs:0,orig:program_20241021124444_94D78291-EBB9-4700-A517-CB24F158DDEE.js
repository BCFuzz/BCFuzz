new WeakMap();
class C2 {
    constructor(a4) {
        delete this.b;
    }
}
new C2();
new C2();
gc();
