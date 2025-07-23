const v1 = new Date(Date);
for (let v2 = 0; v2 < 37; v2++) {
    v1.d = v2;
    delete v1.d;
}
gc();
