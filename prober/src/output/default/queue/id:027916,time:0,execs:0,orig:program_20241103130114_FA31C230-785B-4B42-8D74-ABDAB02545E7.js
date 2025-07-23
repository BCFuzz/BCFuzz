const v0 = [-2147483648,1073741825,4294967295,-1810460340];
let v1 = 12;
const v3 = ("-789426228").constructor;
function f4(a5) {
    let v6 = v1--;
    v6++;
    return v6;
}
v3.valueOf = f4;
const v8 = v3.fromCharCode(v1, v3, v0, "-789426228");
function f9(a10) {
    const o11 = {
        [a10]: v8,
        "g": a10,
    };
    return o11;
}
JSON.parse(JSON.stringify([f9(f9(f4)).g]));
gc();
