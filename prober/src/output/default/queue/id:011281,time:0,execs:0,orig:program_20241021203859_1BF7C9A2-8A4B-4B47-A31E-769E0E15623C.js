const v0 = [-971483764,12248,1000,65535];
for (let v1 = 0; v1 < 100; v1++) {
    const v3 = new Set();
    const v4 = v3.union(v3);
    try { v4.difference(v0); } catch (e) {}
}
gc();
