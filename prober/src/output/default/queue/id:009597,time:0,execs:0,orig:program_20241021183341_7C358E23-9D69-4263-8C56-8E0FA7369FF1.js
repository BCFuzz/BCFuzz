const o1 = {
};
const v2 = o1.constructor;
try { v2.values(null); } catch (e) {}
gc();
