const v1 = new Uint8ClampedArray();
const v2 = [724356.0028531172,-1e-15,Infinity];
const v3 = [303537114,-4294967297,1000];
const v4 = [-4294967296,-256,5];
v4[30] = v1;
v4[336] = v2;
const v7 = [edenGC];
Reflect.apply(v3.sort, v4, v7);
gc();
