function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = [9223372036854775807,4294967295,6,512,536870888,-1073741824];
const v4 = [-1,9,4294967296,65536,10,49592,10];
v4[365] = 43399;
Reflect.apply(v3.sort, v4, F0).d;
gc();
