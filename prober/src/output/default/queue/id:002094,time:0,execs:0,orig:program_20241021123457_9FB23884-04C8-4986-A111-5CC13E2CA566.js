function f0(a1, a2) {
    const o3 = {
        ...a1,
    };
    return a1;
}
new Promise(f0);
gc();
