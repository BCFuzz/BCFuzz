const v2 = Array.__proto__.bind();
try { new v2(); } catch (e) {}
gc();
