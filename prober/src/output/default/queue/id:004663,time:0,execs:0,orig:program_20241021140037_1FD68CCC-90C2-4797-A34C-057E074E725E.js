const o8 = {
    valueOf(a1, a2) {
        function f3() {
            return a1();
        }
        a2[Symbol.hasInstance] = f3;
        return a1 instanceof a2;
    },
};
try { o8.valueOf(65536n, o8); } catch (e) {}
gc();
