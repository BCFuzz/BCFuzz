let v2;
try { v2 = undefined["exp"](); } catch (e) {}
typeof v2;
gc();
