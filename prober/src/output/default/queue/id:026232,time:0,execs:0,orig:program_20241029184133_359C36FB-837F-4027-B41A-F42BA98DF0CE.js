const v1 = /\bn(?<=)/ygu;
v1.toString = Date;
v1.test(v1);
gc();
