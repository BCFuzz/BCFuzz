const v0 = /[\xe2\x81\xa3]/mdgis;
const v4 = Date(5.0);
const v5 = [Date,Date];
const v7 = [5.0,v5,,[v5,v5,v4]];
for (const v9 of "valueOf") {
    const v10 = v0 + v7;
    const v12 = this.RegExp;
    try { v12(v10, v9); } catch (e) {}
}
gc();
