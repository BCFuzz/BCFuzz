const o2 = {
};
const t2 = o2.constructor;
const v4 = t2(10);
try { v4.toPrecision(9007199254740991n); } catch (e) {}
gc();
