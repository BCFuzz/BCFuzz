const v1 = new Int16Array();
const v2 = v1.map(Int16Array);
("c" + v2) + v2;
gc();
