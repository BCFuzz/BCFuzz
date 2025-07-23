const v3 = ["YlW"];
v3.useGrouping = 9007199254740990;
const v4 = ["YlW",-1000000000000.0];
try { v4.toLocaleString("YlW", v3); } catch (e) {}
gc();
