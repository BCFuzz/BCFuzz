const v1 = /Nta(?!bbb|bb)cw[\p{Script_Extensions=Mongolian}&&\p{Number}]?/dis;
for (const v2 of "toPrimitive") {
    const v3 = v1 + v1;
    const v5 = this.RegExp;
    try { v5(v3, v2); } catch (e) {}
}
gc();
