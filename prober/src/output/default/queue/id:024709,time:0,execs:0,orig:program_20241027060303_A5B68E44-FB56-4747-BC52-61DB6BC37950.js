const v1 = URIError();
const v2 = v1.__proto__;
const v3 = [v1,v1,v1];
const v5 = [Reflect];
Reflect.apply(v3.lastIndexOf, v2, v5);
gc();
