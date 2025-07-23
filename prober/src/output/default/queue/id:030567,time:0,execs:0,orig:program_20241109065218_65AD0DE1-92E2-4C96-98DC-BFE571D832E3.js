const v3 = Date(5.0);
const v4 = [Date];
const v6 = [5.0,v4,,[v4,v4,v3]];
const v8 = /Nta(?!bbb|bb)cw[\p{Script_Extensions=Mongolian}&&\p{Number}]?/dis;
for (const v9 of "valueOf") {
    const v10 = v8 + v6;
    const v12 = this.RegExp;
    try { v12(v10, v9); } catch (e) {}
}
gc();
