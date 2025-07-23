function f1() {
    const v3 = ("-789426228").constructor;
    try { v3.raw("-789426228"); } catch (e) {}
}
const v6 = new Uint16Array(1000);
v6["some"](f1);
gc();
