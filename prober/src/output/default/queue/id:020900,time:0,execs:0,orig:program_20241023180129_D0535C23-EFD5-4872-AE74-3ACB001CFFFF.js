const v3 = new Float64Array("", 9007199254740990, 9007199254740990);
try { v3.set("", 9007199254740990); } catch (e) {}
gc();
