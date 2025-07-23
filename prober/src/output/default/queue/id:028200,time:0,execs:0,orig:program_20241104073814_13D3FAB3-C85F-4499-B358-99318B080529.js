const v0 = [-2147483648,1073741825,4294967295,-1810460340];
let v1 = 12;
const v3 = ("-789426228").constructor;
function f4(a5) {
    let v6 = v1--;
    v6--;
    return v6;
}
f4();
v3.valueOf = f4;
const v9 = v3.fromCharCode(v1, v3, v0, "-789426228");
function f10(a11) {
    const o12 = {
        [a11]: v9,
        "g": a11,
    };
    return o12;
}
JSON.parse(JSON.stringify([f10(f10(v3)).g]));
gc();
