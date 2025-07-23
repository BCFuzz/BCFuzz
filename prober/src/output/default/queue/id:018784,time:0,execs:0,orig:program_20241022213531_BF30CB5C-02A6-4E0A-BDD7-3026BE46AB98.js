for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function f11() {
    arguments.length **= 8;
    return arguments;
}
const v13 = f11();
const o14 = {
    ...v13,
};
gc();
