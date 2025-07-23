const v1 = new Date();
for (let v2 = 0; v2 < 5; v2++) {
    v2++;
    v1.setSeconds(v2--);
}
gc();
