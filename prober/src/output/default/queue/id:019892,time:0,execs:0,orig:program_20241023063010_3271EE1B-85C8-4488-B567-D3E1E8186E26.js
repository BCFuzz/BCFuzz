const v1 = /(ab|cde)\1/mis;
v1.toString = Date;
v1.test(v1);
gc();
