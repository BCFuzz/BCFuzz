const v1 = /[(?<a>.)\k<a>+]/dis;
for (const v2 of "valueOf") {
    const v3 = v2 + v1;
    const v5 = this.RegExp;
    try { v5(v3, v2); } catch (e) {}
}
gc();
