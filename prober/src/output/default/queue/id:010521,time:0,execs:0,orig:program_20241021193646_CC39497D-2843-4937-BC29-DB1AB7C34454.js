const v1 = [Date,Date];
v1[Symbol.toPrimitive] = Date;
try { JSON.parse(v1); } catch (e) {}
gc();
