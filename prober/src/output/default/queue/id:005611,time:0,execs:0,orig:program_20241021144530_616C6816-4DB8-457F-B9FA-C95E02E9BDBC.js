function f0() {
    const v2 = ("-789426228").constructor;
    try { v2.fromCharCode("-789426228"); } catch (e) {}
}
const v6 = new Uint16Array(1000);
v6["some"](f0);
gc();
