const o1 = {
};
const v2 = o1.constructor;
try { v2.setPrototypeOf(27); } catch (e) {}
gc();
