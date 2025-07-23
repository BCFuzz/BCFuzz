const v1 = [-4294967296,-41668,-9007199254740992,9223372036854775807];
v1.fill(-1066263893);
v1[307] = v1;
v1.shift();
const t3 = createGlobalObject().Float16Array;
const v7 = new t3(v1);
v7.toSorted();
gc();
