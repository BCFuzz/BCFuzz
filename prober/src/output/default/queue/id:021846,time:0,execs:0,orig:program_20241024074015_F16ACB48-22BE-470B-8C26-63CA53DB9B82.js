const v1 = Symbol.iterator;
const v2 = [127,-12,-2,127,1073741824];
v2[8] = v1;
JSON.stringify(v2);
gc();
