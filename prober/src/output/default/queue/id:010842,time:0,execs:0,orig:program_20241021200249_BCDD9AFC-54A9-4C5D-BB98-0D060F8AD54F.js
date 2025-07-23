const v1 = new Date();
const v2 = v1.getUTCDate;
try { v2.call(); } catch (e) {}
gc();
