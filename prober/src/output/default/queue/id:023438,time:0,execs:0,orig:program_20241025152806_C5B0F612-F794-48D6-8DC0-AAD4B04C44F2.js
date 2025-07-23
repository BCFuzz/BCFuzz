const v0 = [-4294967296,-41668,-9007199254740992,9223372036854775807];
v0.shift();
v0[307] = v0;
v0.shift();
const t3 = createGlobalObject().Float16Array;
const v6 = new t3(v0);
v6.toSorted();
gc();
