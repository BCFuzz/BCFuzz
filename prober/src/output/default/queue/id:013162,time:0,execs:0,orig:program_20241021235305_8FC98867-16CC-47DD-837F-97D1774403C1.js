function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        super();
        const v5 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
        function f6(a7, a8) {
            return a8;
        }
        v5.get = f6;
        function f9(a10, a11) {
            Reflect.defineProperty(Uint8Array, a10, v5);
            return a10;
        }
        f9.call(C1, f0, this, v5);
    }
}
new C1();
new C1();
gc();
