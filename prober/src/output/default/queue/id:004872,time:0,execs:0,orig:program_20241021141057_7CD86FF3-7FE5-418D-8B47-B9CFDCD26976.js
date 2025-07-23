for (let v0 = 0; v0 < 5; v0++) {
    try { Reflect.getPrototypeOf(v0); } catch (e) {}
}
gc();
