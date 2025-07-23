let v1;
try {
const t0 = true;
v1 = t0();
} catch (e) {}
const v3 = v1 + "boolean";
v3.localeCompare(v3.strike());
gc();
