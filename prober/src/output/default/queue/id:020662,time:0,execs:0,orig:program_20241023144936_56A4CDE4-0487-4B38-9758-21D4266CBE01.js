const v2 = new Date();
const v3 = v2.toLocaleTimeString(v2, Date);
const v5 = new Uint8Array(5);
try { v5.setFromBase64(v3); } catch (e) {}
gc();
