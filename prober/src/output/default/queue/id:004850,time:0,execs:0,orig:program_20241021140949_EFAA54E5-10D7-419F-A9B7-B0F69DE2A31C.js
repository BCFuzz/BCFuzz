const v2 = [Date];
v2[Symbol.toPrimitive] = Date;
27805n <= v2;
gc();
