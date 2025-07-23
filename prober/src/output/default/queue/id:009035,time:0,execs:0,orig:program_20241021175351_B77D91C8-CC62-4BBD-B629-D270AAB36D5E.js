function f0() {
    const o1 = {
    };
    function f2() {
        return f0;
    }
    Object.defineProperty(o1, Symbol.toPrimitive, { configurable: true, get: f2 });
    return o1;
}
const v5 = f0();
try { runString(v5); } catch (e) {}
gc();
