class C0 {
    toString(a2, a3, a4) {
        a2.g = 268435440;
    }
}
const v6 = new C0();
const o16 = {
    valueOf(a9, a10) {
        function f11() {
            v6 == "";
            return f11;
        }
        a10[Symbol.hasInstance] = f11;
        a9 instanceof a10;
        return f11;
    },
};
try { o16.valueOf(65536n, o16); } catch (e) {}
gc();
