const v0 = [-9007199254740990,-1543020116,-17970,-47671,-8255,19341,536870887];
v0[5] = v0;
function f1(a2, a3) {
    a2[4] = a3--;
    a2[7] = a3;
    const v5 = a3.toLocaleString();
    v0.sort();
    v0[0] = v5;
    return a2;
}
f1(v0).sort(f1);
gc();
