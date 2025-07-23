class C1 {
    constructor(a3) {
        Object.defineProperty(a3, 2, { writable: true, configurable: true, enumerable: true, value: this });
    }
}
C1[2] = -1.7976931348623157e+308;
new C1(C1);
gc();
