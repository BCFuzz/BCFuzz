const v1 = Math.ceil;
const v2 = v1.bind();
const v3 = v2.bind(v1, v2, Math);
let v4;
try { v4 = new v3(); } catch (e) {}
try { new v3(v4, v4, v4); } catch (e) {}
gc();
