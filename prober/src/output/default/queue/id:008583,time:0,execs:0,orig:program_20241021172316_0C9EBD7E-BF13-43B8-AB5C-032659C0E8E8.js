const v2 = new Uint16Array(268435456);
try { v2.join(268435456); } catch (e) {}
gc();
