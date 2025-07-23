const v2 = ("TGN").constructor;
function f3() {
    return 9;
}
v2[Symbol.toPrimitive] = f3;
const v6 = v2.fromCharCode(v2, "TGN", v2);
for (let i9 = 0, i10 = 10;
    i9 < i10;
    (() => {
        i10--;
        new Date(v6);
    })()) {
}
gc();
