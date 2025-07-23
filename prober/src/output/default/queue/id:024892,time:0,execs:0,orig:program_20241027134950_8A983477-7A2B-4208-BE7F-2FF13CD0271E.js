const v0 = [-4294967296,-41668,-9007199254740992,9223372036854775807];
v0[3] = v0;
v0[307] = v0;
const t3 = createGlobalObject().Float16Array;
const v4 = new t3(v0);
v4.toSorted();
for (let i8 = 0, i9 = 10; i8 !== i9; i9--) {
}
gc();
