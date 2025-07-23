const v0 = [];
const o11 = {
    o(a3, a4, a5) {
        function f6() {
            return Math.abs(this);
        }
        this[Symbol.toPrimitive] = f6;
        a4[this] >>= 2379;
        return f6;
    },
};
try { o11.o(o11, v0); } catch (e) {}
gc();
