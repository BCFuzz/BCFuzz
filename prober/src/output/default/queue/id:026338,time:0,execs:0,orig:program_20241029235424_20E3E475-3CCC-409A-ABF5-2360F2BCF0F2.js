let v1 = Uint16Array.length;
const v2 = v1--;
const v3 = [-2147483648,1073741825,4294967295,-1810460340];
const v6 = ("-789426228").constructor;
const v7 = v6.fromCharCode(12, v6, v3, "-789426228");
function f8(a9) {
    const o10 = {
        "g": a9,
        ...v7,
    };
    return o10;
}
JSON.parse(JSON.stringify([f8(f8()).g], JSON, v2));
gc();
