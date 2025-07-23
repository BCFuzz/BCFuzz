const v1 = new Int8Array();
const v6 = new Proxy(URIError().__proto__, v1);
v6.h = v6;
gc();
