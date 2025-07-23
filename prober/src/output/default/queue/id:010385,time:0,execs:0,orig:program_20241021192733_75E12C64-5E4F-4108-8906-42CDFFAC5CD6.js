const v1 = [1,1,1,1,1];
v1[128] = 1;
new Int16Array(v1);
gc();
