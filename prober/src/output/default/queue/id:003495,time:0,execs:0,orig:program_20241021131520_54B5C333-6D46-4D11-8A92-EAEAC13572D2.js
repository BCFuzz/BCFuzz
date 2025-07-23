class C1 extends Date {
}
class C2 {
}
class C3 extends C2 {
}
class C4 extends C2 {
}
for (let v5 = 0; v5 < 250; v5++) {
    v5++;
    const v7 = v5--;
    v7 % v7;
}
gc();
