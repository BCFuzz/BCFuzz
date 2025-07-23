const v3 = new Int16Array("256");
try { v3.includes("256", 9007199254740990n); } catch (e) {}
gc();
