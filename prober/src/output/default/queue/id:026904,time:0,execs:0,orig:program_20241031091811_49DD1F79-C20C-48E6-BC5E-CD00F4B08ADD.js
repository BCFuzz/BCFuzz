const v2 = new Proxy(Reflect, Reflect);
v2.preventExtensions(v2);
v2.__proto__;
gc();
