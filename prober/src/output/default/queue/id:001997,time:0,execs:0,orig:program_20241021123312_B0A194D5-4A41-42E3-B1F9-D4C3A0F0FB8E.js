const v1 = new BigInt64Array();
const v2 = v1.reduce;
try { v2(); } catch (e) {}
const v5 = Date.call;
try { v5(Date, v1, v2, v1); } catch (e) {}
gc();
