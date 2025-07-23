const v1 = new Map();
const v3 = v1.__lookupSetter__.bind();
try { new v3(); } catch (e) {}
gc();
