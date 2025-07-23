const v0 = /0Ca+b(?!a)?a\1/i;
const o1 = {
};
const v3 = o1.constructor.freeze(v0);
try { v3.compile(); } catch (e) {}
gc();
