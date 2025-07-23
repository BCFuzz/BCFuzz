const o2 = {
};
o2.construct = 129;
const v4 = new Proxy(RegExp, o2);
try { new v4(); } catch (e) {}
gc();
