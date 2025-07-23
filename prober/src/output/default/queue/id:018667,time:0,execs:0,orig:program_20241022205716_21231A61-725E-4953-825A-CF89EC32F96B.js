const v1 = Math.ceil;
const v2 = v1.bind(Math, Math, v1);
v2.bind(Math, v2, Math).bind().name;
gc();
