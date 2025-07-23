const o9 = {
    o(a1, a2, a3) {
        function f4(a5, a6) {
            return a1;
        }
        Object.defineProperty(this, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f4 });
        return Symbol;
    },
};
function f10() {
    return o9;
}
Object.defineProperty(o9, Symbol.toPrimitive, { enumerable: true, get: f10 });
try { o9.o(f10, o9); } catch (e) {}
gc();
