function f1(a2) {
    function f3(a4) {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
        }
        return F5;
    }
    Int32Array[Symbol.toPrimitive] = f3;
    return a2;
}
Int32Array.valueOf = f1;
try { ("").split(Int32Array, Int32Array); } catch (e) {}
gc();
