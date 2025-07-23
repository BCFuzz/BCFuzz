const v1 = -12;
const t1 = v1.__proto__;
t1.valueOf = v1;
gc();
