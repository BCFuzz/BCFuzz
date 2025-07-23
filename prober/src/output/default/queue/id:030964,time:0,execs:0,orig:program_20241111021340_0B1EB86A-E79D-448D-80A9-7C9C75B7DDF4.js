const v0 = /\111\P{gc=Decimal_Number}[Xa\W]/mdgis;
const v4 = Date(4.0);
const v5 = [v4,v4,v4];
const v7 = [4.0,v5,,[v5,v5,v4]];
for (const v9 of "valueOf") {
    const v10 = v0 + v7;
    const v12 = this.RegExp;
    try { v12(v10, v9); } catch (e) {}
}
gc();
