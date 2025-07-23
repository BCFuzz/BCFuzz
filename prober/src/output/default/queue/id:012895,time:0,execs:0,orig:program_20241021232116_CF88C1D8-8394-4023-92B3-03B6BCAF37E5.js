const v2 = createGlobalObject().Float16Array;
const v3 = new v2(v2);
v3["indexOf"]("indexOf", v3 in v2);
gc();
