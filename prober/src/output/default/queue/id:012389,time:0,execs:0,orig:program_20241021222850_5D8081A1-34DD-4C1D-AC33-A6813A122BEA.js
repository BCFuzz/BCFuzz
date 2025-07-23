const v1 = new Date();
for (let v2 = 0; v2 < 5; v2++) {
    const v3 = v1.toString;
    try { v3(v3, v2); } catch (e) {}
}
gc();
