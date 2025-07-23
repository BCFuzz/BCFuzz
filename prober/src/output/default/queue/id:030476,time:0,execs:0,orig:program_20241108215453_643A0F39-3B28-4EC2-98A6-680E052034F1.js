function f1() {
    Number.isNaN(--f1);
    return f1;
}
const t4 = eval(([536870912n,f1]).toLocaleString());
t4();
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
for (let i32 = 0, i33 = 10; i32 < i33--;) {
}
for (let i42 = 0, i43 = 10; i43--, i42 < i43;) {
}
for (let i52 = 0, i53 = 10; i52 < i53; i53--) {
}
gc();
