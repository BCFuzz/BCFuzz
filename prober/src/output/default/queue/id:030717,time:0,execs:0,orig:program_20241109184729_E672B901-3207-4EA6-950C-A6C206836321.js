function f1() {
    f1 ||= Number.isNaN(536870912n);
    return 536870912n;
}
const t4 = eval(([536870912n,f1]).toLocaleString());
t4();
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
for (let i31 = 0, i32 = 10; i31 < i32--;) {
}
for (let i41 = 0, i42 = 10; i42--, i41 < i42;) {
}
for (let i51 = 0, i52 = 10; i51 < i52; i52--) {
}
gc();
