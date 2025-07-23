const v3 = new Int16Array(2147483648);
try { v3.sort(Proxy); } catch (e) {}
gc();
