const v0 = [-2147483648,1073741825,4294967295,-1810460340];
let v1 = 12;
const v3 = ("-789426228").constructor;
function f4(a5) {
    return v1--;
}
v3.valueOf = f4;
const v7 = v3.fromCharCode(v1, v3, v0, "-789426228");
function f8(a9) {
    const o10 = {
        [a9]: v7,
        "g": a9,
    };
    return o10;
}
JSON.parse(JSON.stringify([f8(f8()).g]));
gc();
