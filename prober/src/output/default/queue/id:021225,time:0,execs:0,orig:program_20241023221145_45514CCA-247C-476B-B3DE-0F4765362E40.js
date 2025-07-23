const v1 = URIError();
const v2 = v1.__proto__;
const v4 = new Int32Array(v1, v2, v2);
v4.set(v2);
gc();
