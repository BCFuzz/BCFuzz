const v1 = /7[x\dz]7a[^a]r(?<!)/mdgi;
v1[Symbol.toPrimitive] = Date;
v1.exec(v1);
gc();
