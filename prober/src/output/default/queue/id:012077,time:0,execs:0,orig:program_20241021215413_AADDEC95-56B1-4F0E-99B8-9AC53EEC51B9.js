const v1 = ["-13"];
v1[28] = "-13";
const o2 = {
};
const v4 = new Proxy(v1, o2);
const t5 = Reflect.construct(Uint32Array, [Proxy]).constructor;
new t5(v4);
gc();
