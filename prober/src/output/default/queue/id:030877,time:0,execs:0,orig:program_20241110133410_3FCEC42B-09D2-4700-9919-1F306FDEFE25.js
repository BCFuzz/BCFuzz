const v0 = /[z\P{scx=Greek}]/yvgi;
for (const v2 of "valueOf") {
    const v3 = v2 + v0;
    const v5 = this.RegExp;
    try { v5(v3, v2); } catch (e) {}
}
gc();
