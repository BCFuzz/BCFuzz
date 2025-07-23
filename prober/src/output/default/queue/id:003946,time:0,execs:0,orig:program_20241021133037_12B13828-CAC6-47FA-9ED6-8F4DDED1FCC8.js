for (let v0 = 0; v0 < 10; v0++) {
    const v1 = [];
    Object.defineProperty(Set, "size", { writable: true, configurable: true, value: v1 });
    const v3 = new Set(v1);
    try { v3.difference(Set); } catch (e) {}
}
gc();
