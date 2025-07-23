const v1 = new Proxy(Proxy, Proxy);
const v3 = new Uint16Array();
v3["toSorted"]().sort(v1);
gc();
