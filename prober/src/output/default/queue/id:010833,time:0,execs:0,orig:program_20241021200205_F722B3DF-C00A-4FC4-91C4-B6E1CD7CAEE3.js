function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0(F0, F0);
new F0();
let v6 = 2.0;
v6--;
v6 + v6;
for (let i = 0; i < 250; i++) {
}
gc();
