class C1 extends Uint16Array {
    static n(a3, a4, a5) {
        const v6 = new this();
        function f7() {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            return F8;
        }
        v6[Symbol.toPrimitive] = f7;
        v6.copyWithin(v6);
    }
}
try { C1.n(C1, Uint16Array, C1); } catch (e) {}
gc();
