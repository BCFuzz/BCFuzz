function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = [303537114,-4294967297,1000];
const v3 = [-4294967296,-256,5];
v3[84] = F0;
const v6 = [edenGC];
Reflect.apply(v2.sort, v3, v6);
gc();
