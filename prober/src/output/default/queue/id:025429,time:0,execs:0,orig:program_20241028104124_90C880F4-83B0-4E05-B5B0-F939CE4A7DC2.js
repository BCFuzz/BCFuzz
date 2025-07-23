const v1 = new Float64Array();
const v2 = v1.constructor;
const v3 = [303537114,-4294967297,1000];
const v4 = [-1,9,4294967296,65536,10,49592,10];
const v6 = [];
const v8 = Reflect.apply(v3.sort, v4, v6);
const o11 = {
    "maxByteLength": 6,
};
const v12 = new SharedArrayBuffer(v8, o11);
const v14 = new BigUint64Array(v12);
const v15 = v14.sort();
try { v2.from(v15); } catch (e) {}
gc();
