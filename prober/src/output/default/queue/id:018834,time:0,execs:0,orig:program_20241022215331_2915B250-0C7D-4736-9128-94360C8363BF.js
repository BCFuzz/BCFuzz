const v3 = new Uint8Array(2);
try { v3.setFromBase64("-2147483647"); } catch (e) {}
gc();
