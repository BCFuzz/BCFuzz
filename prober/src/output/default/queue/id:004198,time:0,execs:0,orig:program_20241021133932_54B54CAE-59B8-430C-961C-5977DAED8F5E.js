let v0 = -300.87546047872627;
v0 >>>= -1000000000.0;
try { new Int32Array(v0); } catch (e) {}
gc();
