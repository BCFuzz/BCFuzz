function f0(a1, a2, a3, a4) {
    const o5 = {
        ...a3,
    };
    return o5;
}
const v6 = f0(f0, f0, f0, f0);
const o8 = {
    "ownKeys": eval,
    "set": f0,
};
const v10 = new Proxy(v6, o8);
v10.b = v10;
gc();
