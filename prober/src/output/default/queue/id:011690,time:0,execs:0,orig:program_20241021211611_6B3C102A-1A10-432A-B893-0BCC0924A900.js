function f2() {
    return 840;
}
class C3 extends Array {
    constructor(a5, a6) {
        super(a5);
        Object.defineProperty(Array, a5, { configurable: true, value: f2 });
    }
}
new C3(840);
new C3();
gc();
