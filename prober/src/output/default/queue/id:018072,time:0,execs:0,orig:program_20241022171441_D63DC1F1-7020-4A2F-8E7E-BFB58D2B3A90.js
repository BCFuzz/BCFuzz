const v2 = new Proxy(Reflect, Reflect);
v2.deleteProperty(v2);
gc();
