const v0 = [-65536,536870889,-4294967297,512,65536,-1073741824];
const v2 = [17428,39892,10000,65536,7,-268435456,-62031];
const o3 = {
};
const v5 = new Proxy(v2, o3);
v5.fill(v0);
const v7 = new Uint16Array(v5);
this.constructor.defineProperties(v7, v5);
const t7 = createGlobalObject().Float16Array;
new t7(v5);
gc();
