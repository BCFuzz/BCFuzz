function f0() {
    return f0;
}
for (let v1 = 0; v1 < 250; v1++) {
    delete v1[f0];
    for (let v3 = 0; v3 < 5; v3++) {
    }
}
gc();
