const v2 = new Map();
const t1 = v2.__lookupSetter__.bind("4294967295");
t1();
gc();
