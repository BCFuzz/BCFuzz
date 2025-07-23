const v0 = /Ea+?/ygu;
function f1(a2, a3) {
    function f4() {
        return a2;
    }
    function F5(a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new F5(v0, f4, f1);
    v10.constructor = f1;
    const v11 = v10.constructor;
    function f12(a13, a14) {
        return v0;
    }
    Object.defineProperty(v11, 0, { enumerable: true, get: f4, set: f12 });
    return f1;
}
v0.toString = f1;
v0.toString();
Int16Array.toString = f1;
const v17 = new Int16Array();
try { v17.subarray(Int16Array); } catch (e) {}
gc();
