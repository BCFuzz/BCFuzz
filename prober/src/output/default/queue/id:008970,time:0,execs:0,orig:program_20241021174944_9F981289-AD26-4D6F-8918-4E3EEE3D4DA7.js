function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0(F0, F0, F0);
const v7 = v5.propertyIsEnumerable();
const v8 = v7.valueOf;
try { v8(F0, "", v5, v8, v7, v8, v7); } catch (e) {}
gc();
