JSON[JSON.toPrimitive] = JSON;
try { JSON.stringify(JSON); } catch (e) {}
gc();
