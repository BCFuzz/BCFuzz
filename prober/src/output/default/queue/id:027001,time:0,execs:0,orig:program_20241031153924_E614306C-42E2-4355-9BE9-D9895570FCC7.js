function f1() {
    return 0.0992983627044779;
}
const v2 = [1.0,-0.0,-3.1262886634469433];
v2.toString = f1;
v2[0] = v2;
const v5 = new Uint32Array(1000);
for (const v6 in v5) {
    const v8 = v2.join(v6.toLocaleLowerCase());
    (-871830886 >>> -871830886) % v8;
}
gc();
