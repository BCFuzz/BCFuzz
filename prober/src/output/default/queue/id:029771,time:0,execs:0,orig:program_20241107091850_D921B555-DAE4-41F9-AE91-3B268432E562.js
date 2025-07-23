for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = /[(?<a>.)\k<a>+]/dis;
for (const v12 of "toPrimitive") {
    const v13 = v12 + v11;
    const v15 = this.RegExp;
    try { v15(v13, v12); } catch (e) {}
}
gc();
