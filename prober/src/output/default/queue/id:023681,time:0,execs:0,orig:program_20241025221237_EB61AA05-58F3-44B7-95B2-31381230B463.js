function f0() {
    return f0;
}
f0();
const v4 = f0.bind().bind();
([-4n,-10n]).sort(v4);
gc();
