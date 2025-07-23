const v1 = [9,2147483649,1558173,1225060212,56024];
v1[Symbol.toPrimitive] = Symbol;
v1 != 1024;
gc();
