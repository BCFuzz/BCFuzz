const v0 = [-4294967296,-41668,-9007199254740992,9223372036854775807];
v0[307] = v0;
v0.shift();
const t2 = createGlobalObject().Float16Array;
const v5 = new t2(v0);
v5.toSorted();
gc();
