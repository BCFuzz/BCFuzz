function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
function f4() {
    function f6() {
        return f4;
    }
    const v7 = f6.apply(BigInt64Array, arguments);
    try { v7(); } catch (e) {}
}
f4(BigInt64Array, C2);
gc();
