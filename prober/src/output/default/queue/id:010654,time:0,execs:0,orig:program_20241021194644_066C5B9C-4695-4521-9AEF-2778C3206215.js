const v1 = [-1.0,9.330557499684481,-0.0,2.220446049250313e-16];
const o2 = {
};
o2.has = Symbol;
const v4 = new Proxy(Symbol, o2);
v1[6] in v4;
gc();
