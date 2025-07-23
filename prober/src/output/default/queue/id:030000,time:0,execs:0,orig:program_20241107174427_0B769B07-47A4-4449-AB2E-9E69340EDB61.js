const v1 = SharedArrayBuffer.prototype;
for (const v3 of "toPrimitive") {
    const v4 = v3 + v1;
    const v6 = this.RegExp;
    try { v6(v4, v3); } catch (e) {}
}
gc();
