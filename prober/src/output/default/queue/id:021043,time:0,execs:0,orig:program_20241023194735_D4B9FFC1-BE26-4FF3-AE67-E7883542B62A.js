const o1 = {
};
const v3 = new Proxy(Array, o1);
const o4 = {
};
const v5 = o4.__proto__;
v5.__defineGetter__(v5, v3);
gc();
