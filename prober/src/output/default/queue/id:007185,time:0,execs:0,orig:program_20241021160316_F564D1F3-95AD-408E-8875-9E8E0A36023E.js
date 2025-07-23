function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    -a3;
    a4 ^ a4;
}
const v7 = new F1(6);
const v8 = v7.constructor;
try { new v8(v7, v7); } catch (e) {}
for (let v10 = 0; v10 < 250; v10++) {
}
gc();
