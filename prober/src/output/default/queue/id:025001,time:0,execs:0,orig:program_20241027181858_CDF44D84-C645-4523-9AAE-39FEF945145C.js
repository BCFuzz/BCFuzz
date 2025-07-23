const v1 = /\u0060/v.source;
try { eval(v1); } catch (e) {}
gc();
