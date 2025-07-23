const v1 = new Int16Array();
class C2 {
}
class C3 extends C2 {
}
for (let v4 = 0; v4 < 250; v4++) {
    const v5 = -v4;
    const t7 = v5 == v1 ? v5 : v1;
    t7.length = 268435440;
    v4++;
    v4--;
}
gc();
