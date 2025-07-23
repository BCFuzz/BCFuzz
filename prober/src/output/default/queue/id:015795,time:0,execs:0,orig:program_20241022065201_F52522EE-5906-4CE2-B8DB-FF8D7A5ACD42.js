const v2 = Math.ceil.bind();
const v3 = v2.bind();
const v4 = v3.bind(v3, v2);
try { new v4(); } catch (e) {}
gc();
