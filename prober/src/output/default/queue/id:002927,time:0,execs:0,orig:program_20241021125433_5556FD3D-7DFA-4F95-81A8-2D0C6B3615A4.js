function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(a6, a6); } catch (e) {}
    a5--;
    this.b = a5;
}
new F3(2147483648, 2147483648);
new F3(1291513535, 268435440);
new F3(268435440, 1291513535);
gc();
