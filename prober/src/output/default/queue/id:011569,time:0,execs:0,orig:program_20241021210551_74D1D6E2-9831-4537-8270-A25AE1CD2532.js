const v2 = new Map();
v2.valueOf = Date;
const v4 = v2 + [127,-14,1073741823,1641801041,-4294967295,536870912,6,4294967295];
v4[117].includes(v4);
gc();
