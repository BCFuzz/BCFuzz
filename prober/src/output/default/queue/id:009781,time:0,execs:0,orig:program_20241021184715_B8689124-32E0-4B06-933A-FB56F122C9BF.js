const v1 = new Int16Array();
function f2() {
    function f3(a4, a5) {
        return a5 <<= v1;
    }
    return f3;
}
Object.defineProperty(v1, "toString", { get: f2 });
try { v1.toString(); } catch (e) {}
gc();
