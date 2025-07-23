function f0(a1, a2) {
    return f0;
}
const v4 = Symbol.toPrimitive;
const v5 = [2];
const v6 = [v4,v4,v4];
function f7() {
    function f8() {
        return f0 + v4;
    }
    return f8;
}
Object.defineProperty(v6, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f7 });
try { v6.toSpliced(v5, v6); } catch (e) {}
gc();
