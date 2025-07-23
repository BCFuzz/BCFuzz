let v0 = 8;
const v1 = v0--;
const v4 = new Uint32Array(127);
const v6 = new Int32Array();
v6.minimumIntegerDigits = v1;
for (let v7 = 0; v7 < 5; v7++) {
    v4.toLocaleString(v7, v6);
}
gc();
