function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6("-9223372036854775807", "-9223372036854775807"); } catch (e) {}
    try { a5.concat(a4, 18526, 18526); } catch (e) {}
}
new F2(18526, "-9223372036854775807");
gc();
