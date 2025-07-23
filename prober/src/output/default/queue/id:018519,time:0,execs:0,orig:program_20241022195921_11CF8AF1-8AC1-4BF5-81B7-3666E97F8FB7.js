const v3 = new Int16Array("256");
try { v3.fill("256", -33697n); } catch (e) {}
gc();
