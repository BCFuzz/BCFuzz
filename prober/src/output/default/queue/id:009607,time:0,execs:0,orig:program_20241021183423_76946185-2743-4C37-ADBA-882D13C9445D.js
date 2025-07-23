function f1() {
    function f3() {
        return f1;
    }
    Object.defineProperty(Float64Array, Symbol.toPrimitive, { configurable: true, get: f3 });
    Float64Array >>> -12;
    return -12;
}
const v7 = [-44525,10];
try { v7.flatMap(f1); } catch (e) {}
gc();
