const o1 = {
};
const v2 = o1.constructor;
try { v2.setPrototypeOf(o1, "bigint"); } catch (e) {}
gc();
