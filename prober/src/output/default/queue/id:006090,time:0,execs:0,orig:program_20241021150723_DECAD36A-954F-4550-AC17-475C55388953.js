const v1 = new Uint8Array();
const o2 = {
};
const v4 = new Proxy(v1, o2);
try { v4.setFromHex(v1, o2, Proxy, Uint8Array); } catch (e) {}
gc();
