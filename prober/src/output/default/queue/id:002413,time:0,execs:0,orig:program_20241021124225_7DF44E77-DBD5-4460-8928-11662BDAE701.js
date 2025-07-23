const v2 = new Int16Array();
const v4 = new Int16Array(v2, 4096, 4096);
const v6 = [4096];
const t3 = Reflect.apply(v4.copyWithin, v2, v6);
t3[-1] -= 3424;
gc();
