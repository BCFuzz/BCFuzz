const v0 = [2147483648,-125287293,-49176,3,536870887,1073741823,-1232234415,1024,720707509];
const o3 = {
    "maxByteLength": 1073741824,
};
const v5 = createGlobalObject();
const v6 = v5.Float16Array;
const v8 = new ArrayBuffer(1622, o3);
const v9 = new v6(v8);
v9.fill(v5, v0, v9, 1622).set(v0);
gc();
