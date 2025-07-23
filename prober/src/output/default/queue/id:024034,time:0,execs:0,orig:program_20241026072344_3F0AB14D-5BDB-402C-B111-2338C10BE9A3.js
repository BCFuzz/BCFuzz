const v1 = Promise.reject;
try { v1(Promise); } catch (e) {}
gc();
