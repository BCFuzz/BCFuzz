class C0 {
}
const v1 = new C0();
JSON.toPrimitive = ("unicode").slice(-536870912, v1);
JSON[JSON.toPrimitive] = JSON;
try { JSON.stringify(JSON); } catch (e) {}
gc();
