const v2 = new Uint8Array(3115);
try { v2.map(noInline); } catch (e) {}
gc();
