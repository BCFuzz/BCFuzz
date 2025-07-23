const v2 = /[\P{gc=Decimal_Number}w\ud808\udf45*qa\s]/dis;
for (const v3 of "toPrimitive") {
    const v4 = 2 && v2;
    const v6 = this.RegExp;
    try { v6(v4, v3); } catch (e) {}
}
gc();
