const v1 = new Uint16Array();
const v3 = new Proxy(Uint16Array, v1);
new v3();
gc();
