const v1 = ("TGN").constructor;
function f2() {
    return 1024;
}
v1.toString = f2;
const v4 = v1.fromCharCode(v1);
for (let i7 = 0, i8 = 10;
    i7 < i8;
    (() => {
        i8--;
        new Date(v4);
    })()) {
}
gc();
