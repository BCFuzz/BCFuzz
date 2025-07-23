const o1 = {
};
o1.toJSON = -28626;
o1.h = o1;
try { JSON.stringify(o1); } catch (e) {}
gc();
