const v1 = /\11a\xe2\x81\xa3+/dis;
for (const v2 of "toPrimitive") {
    const v3 = v2 + v1;
    const v5 = this.RegExp;
    try { v5(v3, v2); } catch (e) {}
}
gc();
