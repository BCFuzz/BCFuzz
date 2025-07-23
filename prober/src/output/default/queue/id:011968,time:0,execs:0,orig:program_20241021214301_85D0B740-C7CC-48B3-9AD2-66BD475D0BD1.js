const o9 = {
    valueOf(a1, a2) {
        function f3(a4) {
            return 128;
        }
        a2[Symbol.hasInstance] = f3;
        a1 instanceof a2;
        return this;
    },
};
o9.valueOf(65536n, o9);
gc();
