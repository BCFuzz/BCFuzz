for (const v2 in "p") {
    try { new WeakSet(v2); } catch (e) {}
}
gc();
