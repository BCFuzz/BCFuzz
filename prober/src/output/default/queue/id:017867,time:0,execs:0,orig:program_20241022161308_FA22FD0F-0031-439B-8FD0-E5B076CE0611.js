class C0 {
    constructor(a2) {
        function f3(a4) {
            return C0;
        }
        this.get = f3;
        Reflect.defineProperty(Uint8Array, 127, this);
    }
}
const v9 = new C0(C0);
const v10 = v9.constructor;
new v10(v9, v10, v10, C0, v9);
gc();
