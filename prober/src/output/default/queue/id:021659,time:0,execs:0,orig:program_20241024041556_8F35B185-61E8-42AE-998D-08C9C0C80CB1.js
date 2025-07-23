const v1 = /a\nW/vgi.source;
Date[Symbol.toPrimitive] = Date;
const v5 = Date.constructor;
try { v5(v1, Date); } catch (e) {}
gc();
