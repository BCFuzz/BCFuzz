const v2 = [-9007199254740991n];
const o3 = {
    "h": v2,
};
const v4 = o3.h;
function f5() {
    8 >>> v4.indexOf(5n);
    return v4;
}
for (let v9 = 0; v9 < 10; v9++) {
    f5();
}
gc();
