function f0() {
    return f0;
}
class C1 extends f0 {
}
function* f2(a3) {
    return C1;
}
f2(f0);
("0").bold(C1, "0");
for (let v7 = 0; v7 < 250; v7++) {
    v7++;
    v7--;
}
gc();
