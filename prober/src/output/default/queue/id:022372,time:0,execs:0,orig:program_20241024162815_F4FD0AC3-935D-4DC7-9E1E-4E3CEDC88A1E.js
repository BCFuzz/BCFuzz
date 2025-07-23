const v3 = new Uint8Array();
v3.lastChunkHandling = -10;
try { v3.setFromBase64("-2147483647", v3); } catch (e) {}
gc();
