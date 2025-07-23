const v2 = new BigUint64Array();
try { v2.with(8n); } catch (e) {}
gc();
