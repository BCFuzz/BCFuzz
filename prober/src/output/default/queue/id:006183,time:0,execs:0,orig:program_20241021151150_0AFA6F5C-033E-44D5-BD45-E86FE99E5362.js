const v1 = ("matchAll").toLocaleLowerCase();
const v2 = v1.constructor;
const v3 = new v2("matchAll", v1, v1, v2, v2);
v3.indexOf("matchAll", v2, "matchAll");
gc();
