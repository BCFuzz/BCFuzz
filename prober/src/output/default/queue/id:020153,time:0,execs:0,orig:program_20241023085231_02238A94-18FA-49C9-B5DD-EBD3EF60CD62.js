const v1 = new BigInt64Array();
const v2 = [-11,4096,10000,-839553715,2298,1317756020,256,64,-1864247364,-268435456];
const v3 = v2.splice;
const v4 = v3.bind(v1);
try { v4(v3, v3, v2); } catch (e) {}
gc();
