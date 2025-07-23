const v3 = Date(1e-15);
const v4 = [v3,v3,v3];
const v6 = [1e-15,v4,,[v4,v4,v3]];
const v8 = /[\111]/dis;
for (const v9 of "valueOf") {
    const v10 = v8 + v6;
    const v12 = this.RegExp;
    try { v12(v10, v9); } catch (e) {}
}
gc();
