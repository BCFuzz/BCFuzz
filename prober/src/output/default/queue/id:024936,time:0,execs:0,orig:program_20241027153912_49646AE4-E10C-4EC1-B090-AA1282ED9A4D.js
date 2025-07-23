const v0 = [-4294967296,-41668,-9007199254740992,9223372036854775807];
v0[1] = v0;
v0[3] = v0;
v0.shift();
v0[307] = v0;
const t5 = createGlobalObject().Float16Array;
const v5 = new t5(v0);
v5.toSorted();
for (let i9 = 0, i10 = 10; i9 !== i10; i10--) {
}
gc();
