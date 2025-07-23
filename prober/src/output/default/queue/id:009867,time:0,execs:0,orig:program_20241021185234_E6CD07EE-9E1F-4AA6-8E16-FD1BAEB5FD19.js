function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1(65535, 65535);
const v9 = Date.UTC;
try { new v9(Date, 10000, v5, v5, 10000, Date, 10000); } catch (e) {}
gc();
