const v0 = /i[\0]/mdgu;
for (const v2 of "toPrimitive") {
    const v3 = v2 + v0;
    const v5 = this.RegExp;
    try { v5(v3, v2); } catch (e) {}
}
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
for (let i19 = 0, i20 = 10; i20--, i19 < i20;) {
}
for (let i29 = 0, i30 = 10; i30--, i29 < i30;) {
}
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
}
gc();
