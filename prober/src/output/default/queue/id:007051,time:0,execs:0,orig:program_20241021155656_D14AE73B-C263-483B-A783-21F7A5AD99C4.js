const v0 = [];
function f1() {
    function f2() {
        function f3(a4, a5) {
            return a4;
        }
        return f3;
    }
    return f2;
}
function f6(a7) {
    return a7;
}
Object.defineProperty(v0, Symbol.toPrimitive, { get: f1, set: f6 });
const v11 = new Float32Array();
try { v11.subarray(v0); } catch (e) {}
gc();
