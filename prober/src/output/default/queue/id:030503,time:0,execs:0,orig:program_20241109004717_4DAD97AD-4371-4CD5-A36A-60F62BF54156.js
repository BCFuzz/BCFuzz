function f1() {
    return Number.isNaN(f1--);
}
const t3 = eval(([536870912n,f1]).toLocaleString());
t3();
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let i22 = 0, i23 = 10; i22 < i23--;) {
}
for (let i32 = 0, i33 = 10; i33--, i32 < i33;) {
}
for (let i42 = 0, i43 = 10; i42 < i43; i43--) {
}
gc();
