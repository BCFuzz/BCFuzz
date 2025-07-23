function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let v3 = 0; v3 < 25; v3++) {
    v2["p" + v3] = v3;
}
class C6 {
}
const v7 = new C6();
const o8 = {
};
const v9 = o8.constructor;
try { v9.defineProperties(v7, v2); } catch (e) {}
gc();
