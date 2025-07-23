const v1 = [-256n,-256n,-256n,-256n];
const o2 = {
};
v1[9] = o2;
let v3;
try {
const t0 = -256n;
v3 = t0();
} catch (e) {}
v1.toSpliced(v3, v3);
gc();
