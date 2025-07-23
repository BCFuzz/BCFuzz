const v1 = new Float64Array();
function f2(a3) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    return F4();
}
v1[Symbol.toPrimitive] = f2;
try { v1.slice(v1); } catch (e) {}
gc();
