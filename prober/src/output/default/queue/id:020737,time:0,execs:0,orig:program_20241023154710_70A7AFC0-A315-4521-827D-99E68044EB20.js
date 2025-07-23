const v2 = new Proxy(Reflect, Reflect);
v2.isExtensible(v2);
gc();
