const v2 = new Uint8Array("268435441");
const t1 = v2.constructor;
const v4 = new t1();
try { v4.setFromHex("268435441"); } catch (e) {}
gc();
