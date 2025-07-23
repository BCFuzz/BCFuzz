const v0 = [];
const v1 = [v0,v0];
const o2 = {
};
const v4 = new Proxy(v1, o2);
v4[28] = v0;
gc();
