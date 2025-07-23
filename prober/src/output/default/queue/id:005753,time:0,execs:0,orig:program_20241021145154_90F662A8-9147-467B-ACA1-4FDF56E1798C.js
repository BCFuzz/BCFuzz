function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
function f5(a6, a7) {
    return a6;
}
function f8(a9, a10) {
    v4.getDay(F0, f5, f5);
    return f8;
}
f5[Symbol.toPrimitive] = f8;
try { Symbol.for(f5); } catch (e) {}
gc();
