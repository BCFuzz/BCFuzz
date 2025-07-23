const v1 = [-9007199254740990,-1543020116,-17970,-47671,-8255,19341,536870887];
v1[5] = v1;
function f2(a3, a4) {
    a3[4] = a4--;
    a3[7] = a4;
    const v6 = a4.toLocaleString(f2);
    v1.sort();
    v1[0] = v6;
    return a3;
}
f2(257, 257);
f2(v1).sort(f2);
gc();
