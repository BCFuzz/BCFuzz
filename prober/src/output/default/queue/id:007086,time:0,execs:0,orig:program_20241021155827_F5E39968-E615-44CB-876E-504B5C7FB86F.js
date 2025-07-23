Date.toString = Date;
const v3 = [false,10000n,Date];
v3.join(v3);
gc();
