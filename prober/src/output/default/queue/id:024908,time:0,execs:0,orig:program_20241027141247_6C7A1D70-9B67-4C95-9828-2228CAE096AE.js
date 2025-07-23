const v2 = new Date("resizable");
const v3 = v2.toJSON;
try { v3.apply("resizable"); } catch (e) {}
gc();
