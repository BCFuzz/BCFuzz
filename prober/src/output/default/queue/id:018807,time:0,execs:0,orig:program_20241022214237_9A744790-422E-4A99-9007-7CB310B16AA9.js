const v3 = createGlobalObject().Float16Array;
v3[2] = -1109172471;
const v4 = new v3(v3);
v4.sort().includes(-1109172471);
gc();
