const v2 = new Set();
const v3 = v2.constructor;
try { new v3(-203704653); } catch (e) {}
gc();
