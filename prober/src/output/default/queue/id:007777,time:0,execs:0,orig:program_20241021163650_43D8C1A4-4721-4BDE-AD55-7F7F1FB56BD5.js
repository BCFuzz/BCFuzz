let v1;
try {
const t0 = true;
v1 = t0(true);
} catch (e) {}
(v1 + "boolean").localeCompare();
gc();
