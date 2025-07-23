function f1() {
    const v2 = new Date(Date);
    const t2 = v2.getUTCSeconds;
    t2();
    return v2;
}
try { f1(); } catch (e) {}
gc();
