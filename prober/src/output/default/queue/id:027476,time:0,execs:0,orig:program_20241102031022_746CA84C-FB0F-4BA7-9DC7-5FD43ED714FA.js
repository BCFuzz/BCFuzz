const v1 = createGlobalObject();
const v3 = Date();
JSON.toJSON = v1;
const v5 = JSON.stringify(JSON, JSON, v3);
try { JSON.parse(v5); } catch (e) {}
gc();
