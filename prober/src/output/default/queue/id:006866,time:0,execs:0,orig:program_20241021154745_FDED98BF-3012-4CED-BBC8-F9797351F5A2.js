const v4 = Math.ceil;
const v5 = v4.bind();
const t2 = v5.bind(v5, Int16Array, v4, "setTime");
t2();
gc();
