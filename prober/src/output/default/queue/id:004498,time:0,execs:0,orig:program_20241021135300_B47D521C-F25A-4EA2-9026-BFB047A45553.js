const o1 = {
};
o1[Symbol.iterator] = Symbol;
try { new Float64Array(o1); } catch (e) {}
gc();
