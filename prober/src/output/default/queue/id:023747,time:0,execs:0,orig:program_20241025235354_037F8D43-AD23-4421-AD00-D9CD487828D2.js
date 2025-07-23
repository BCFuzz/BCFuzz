function f0() {
    return f0;
}
const v1 = f0.name;
const v3 = f0.bind(v1, -4n, v1, v1, f0);
const v4 = v3.bind(v3, v3, v3, v1);
([-4n,-10n]).sort(v4);
gc();
