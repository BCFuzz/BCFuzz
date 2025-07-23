const v1 = Math.ceil;
const v2 = v1.bind();
v2.length = v2;
const v3 = v2.bind(v1, Math, v2);
v3.name = v3;
gc();
