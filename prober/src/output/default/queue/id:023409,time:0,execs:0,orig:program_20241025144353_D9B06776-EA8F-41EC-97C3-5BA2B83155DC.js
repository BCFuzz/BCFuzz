function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
function f5(a6) {
    return F0;
}
f5.toISOString = v4;
const v8 = new Date(Date);
const v9 = v8.toJSON;
try { v9.call(f5); } catch (e) {}
gc();
