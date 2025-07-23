function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 {
        }
        class C8 extends C7 {
        }
        Object.defineProperty(C7, 2, { value: NaN });
    }
    new F2();
}
new F0();
class C13 {
    constructor(a15, a16, a17, a18) {
        function f21() {
            return f21;
        }
        f21.apply(BigInt64Array, arguments);
    }
}
new C13(1000, -9007199254740991);
gc();
