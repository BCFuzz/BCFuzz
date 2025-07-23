const v1 = new BigInt64Array();
class C3 {
    constructor(a5, a6, a7) {
        function f8() {
            return v1.copyWithin(C3, 256, a6);
        }
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = new Uint8Array();
            v15.valueOf = f8;
            v15[3] = v15;
        }
        new F10();
    }
}
new C3();
gc();
