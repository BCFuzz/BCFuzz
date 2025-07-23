const v3 = new Uint8Array(5);
try { v3.setFromBase64("-2147483647", 5); } catch (e) {}
gc();
