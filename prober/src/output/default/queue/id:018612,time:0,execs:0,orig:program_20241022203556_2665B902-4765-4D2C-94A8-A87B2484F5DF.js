const v2 = createGlobalObject();
const v3 = v2.Float16Array;
const v4 = new v3(v3);
const v5 = v4.with();
let v6;
try { v6 = v5.filter(v2, v5, v3, v4, "string"); } catch (e) {}
v5.indexOf("string", v6);
gc();
