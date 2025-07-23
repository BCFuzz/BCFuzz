for (let v1 = 0; v1 < 25; v1++) {
    const v3 = "p" + v1;
    this[v3] = v3;
}
for (const v4 in this) {
}
gc();
