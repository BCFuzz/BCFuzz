const v1 = new Date();
const v2 = v1.setYear;
try { v2.apply(); } catch (e) {}
gc();
