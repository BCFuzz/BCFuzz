const v0 = [];
const o8 = {
    valueOf(a2, a3) {
        function f4() {
            return v0;
        }
        a3[Symbol.hasInstance] = f4;
        a2 instanceof a3;
        return f4;
    },
};
o8.valueOf(65536n, o8);
gc();
