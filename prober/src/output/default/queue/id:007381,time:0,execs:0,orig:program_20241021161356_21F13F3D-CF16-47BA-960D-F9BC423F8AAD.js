const v0 = /9(?!(a))\1(?:ab){4,7}?/su;
const v1 = v0.toString();
const o2 = {
};
const v3 = o2.constructor;
try { v3.defineProperties(v0, v1); } catch (e) {}
gc();
