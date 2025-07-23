const v0 = /(\c~\ud808\udf45*)/s;
for (const v2 of "valueOf") {
    const v3 = v0 + v2;
    const v5 = this.Function;
    try { v5(v3); } catch (e) {}
}
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
}
gc();
