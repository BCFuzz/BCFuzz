const v3 = new WeakSet();
const v4 = v3.has();
if (!(null > WeakSet)) {
    try { v4(); } catch (e) {}
}
gc();
