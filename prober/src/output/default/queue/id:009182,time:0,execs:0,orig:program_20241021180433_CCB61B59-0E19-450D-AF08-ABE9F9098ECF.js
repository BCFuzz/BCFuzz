const v1 = new Date(Date);
const v2 = v1.getSeconds;
try { v2.call(); } catch (e) {}
gc();
