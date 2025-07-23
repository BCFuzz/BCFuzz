function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a2.caller;
}
const v6 = new F0(F0);
const v8 = ("-13").substring;
const v9 = v6.constructor;
try { new v9(v8); } catch (e) {}
gc();
