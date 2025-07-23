const v2 = new Int32Array();
try { v2.copyWithin(2147483648n); } catch (e) {}
gc();
