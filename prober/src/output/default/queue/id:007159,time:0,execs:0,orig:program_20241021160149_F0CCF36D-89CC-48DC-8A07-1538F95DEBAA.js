function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
class C3 extends F0 {
}
class C4 {
    static {
        function f7(a8, a9, a10) {
            try { a8(a8, C3); } catch (e) {}
            new a9();
            arguments[Symbol.iterator] = BigUint64Array;
            return C3;
        }
        f7(f7, C4);
    }
}
gc();
