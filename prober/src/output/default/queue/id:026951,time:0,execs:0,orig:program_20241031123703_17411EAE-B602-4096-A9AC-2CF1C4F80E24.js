const v1 = new Map();
const o2 = {
};
JSON.toJSON = o2;
JSON[v1.toPrimitive] = JSON;
try { JSON.stringify(JSON); } catch (e) {}
gc();
