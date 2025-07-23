const v1 = new Date(Date);
const v2 = v1.toJSON;
try { v2(Date); } catch (e) {}
gc();
