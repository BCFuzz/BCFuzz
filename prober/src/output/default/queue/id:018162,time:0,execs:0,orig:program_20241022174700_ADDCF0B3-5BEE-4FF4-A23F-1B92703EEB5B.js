function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = this.isPrototypeOf(this, a3, 268435440, 268435440) - a4;
    v6++;
}
const v8 = new F1(268435440, 268435440);
const t6 = v8.constructor;
new t6(268435440, 268435440);
for (let v11 = 0; v11 < 250; v11++) {
}
gc();
