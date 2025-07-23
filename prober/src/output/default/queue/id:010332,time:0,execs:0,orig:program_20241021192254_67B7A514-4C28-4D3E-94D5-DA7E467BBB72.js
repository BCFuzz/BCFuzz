const v3 = new Int16Array("256", Int16Array, "256");
try { v3.slice("256", -33697n); } catch (e) {}
gc();
