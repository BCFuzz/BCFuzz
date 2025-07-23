const v2 = /T[\[\]\{\}\(\)\%\^\ ]*/;
for (const v3 of "toPrimitive") {
    const v4 = 2 && v2;
    const v6 = this.RegExp;
    try { v6(v4, v3); } catch (e) {}
}
gc();
