const v1 = this.constructor;
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let v12 = 0; v12 < 10; v12++) {
    v1["p" + v12] = v12;
}
v1.entries(v1);
gc();
