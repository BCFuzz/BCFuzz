function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const o6 = {
    "get": v4,
};
const v8 = new Proxy(RegExp, o6);
const v10 = new Set();
try { v10.isSubsetOf(v8); } catch (e) {}
gc();
