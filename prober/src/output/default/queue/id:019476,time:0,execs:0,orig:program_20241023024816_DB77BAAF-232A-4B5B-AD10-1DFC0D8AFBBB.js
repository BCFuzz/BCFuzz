function f1(a2) {
    return -4294967296 === a2;
}
const v4 = f1();
for (let v5 = 0; v5 < 10; v5++) {
    f1(v4);
}
gc();
