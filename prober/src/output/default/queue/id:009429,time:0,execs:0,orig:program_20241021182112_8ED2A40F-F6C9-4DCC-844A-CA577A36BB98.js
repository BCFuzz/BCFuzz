function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0(F0, F0, F0, F0);
function f7(a8, a9) {
    eval(a8);
    const o17 = {
        valueOf(a13, a14, a15, a16) {
            return F0;
        },
    };
    return o17;
}
const v19 = f7(f7(f7, v6), v6, F0);
try { v19.p(F0, v6, F0); } catch (e) {}
gc();
