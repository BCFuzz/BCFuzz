const v1 = [10,129,1073741825,0,8,2147483649,11,-58431,9];
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new F8();
    Object.defineProperty(v10, Symbol.toStringTag, { get: a7 });
    this.e = a6;
}
const v13 = new F3(196.25100004624983, F3);
const v14 = v13.e;
try { new v14(v1, v13, -49554.133269712445); } catch (e) {}
gc();
