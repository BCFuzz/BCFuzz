const v2 = new Uint32Array();
v2.constructor = -9223372036854775807;
try { v2.slice(); } catch (e) {}
gc();
