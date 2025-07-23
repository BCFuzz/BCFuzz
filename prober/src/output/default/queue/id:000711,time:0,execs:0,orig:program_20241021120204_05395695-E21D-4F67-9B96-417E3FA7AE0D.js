class C0 {
}
function f1() {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    return F2;
}
C0[Symbol.iterator] = f1;
try { new BigInt64Array(C0); } catch (e) {}
const v10 = [-2.0,2.220446049250313e-16,2.5401997447871806e+307,-4.0];
v10[Symbol.isConcatSpreadable] = v10;
v10.concat();
gc();
