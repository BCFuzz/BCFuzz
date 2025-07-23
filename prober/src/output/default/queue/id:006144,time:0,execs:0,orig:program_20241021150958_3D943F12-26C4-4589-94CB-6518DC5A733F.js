function f0() {
    return f0;
}
const v2 = [-1.7976931348623157e+308,9.849436291879343e+307,-804758.6607843935,1000000000.0,1.6391980258660077e+308,2.9201182315535394,NaN,0.26775117625814027,268.80155183028455,324824.97939709947];
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function F9() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v11 = new F9();
    Object.defineProperty(v11, Symbol.toStringTag, { get: a8 });
    this.e = a7;
}
const v14 = new F4(196.25100004624983, F4);
const v15 = v14.e;
try { new v15(f0, -1000000000.0, v2); } catch (e) {}
gc();
