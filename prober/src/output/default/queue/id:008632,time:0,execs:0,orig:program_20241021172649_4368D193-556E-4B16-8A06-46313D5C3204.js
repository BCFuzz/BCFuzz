const v2 = new Uint16Array();
try { v2.slice(9223372036854775807n); } catch (e) {}
gc();
