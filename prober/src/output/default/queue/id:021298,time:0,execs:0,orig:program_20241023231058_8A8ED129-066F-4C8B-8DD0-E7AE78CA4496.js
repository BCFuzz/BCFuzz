const v1 = new Date();
const v3 = [Date,Date,Date()];
const v6 = Array(128, v3);
const v8 = [v3,v3,v3,v3,v3];
v8.numberingSystem = v6;
const v9 = ["YlW",v1];
try { v9.toLocaleString("YlW", v8); } catch (e) {}
gc();
