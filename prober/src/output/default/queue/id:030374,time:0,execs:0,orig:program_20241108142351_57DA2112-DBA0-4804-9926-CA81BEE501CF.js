const v1 = /[\00011]a{z}[^l]/dis;
for (const v2 of "u6") {
    const v3 = v2 + v1;
    const v5 = this.RegExp;
    try { v5(v3, v2); } catch (e) {}
}
gc();
