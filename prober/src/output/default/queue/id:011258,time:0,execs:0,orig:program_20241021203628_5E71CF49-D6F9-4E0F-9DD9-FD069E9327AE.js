function f2(a3, a4, a5) {
    let v7;
    try { v7 = eval(a4); } catch (e) {}
    return v7;
}
f2(f2("name", "name"), "MAX_SAFE_INTEGER");
gc();
