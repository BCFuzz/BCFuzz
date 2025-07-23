const v3 = ("__proto__").constructor.fromCharCode(12);
function f4(a5) {
    const o6 = {
        "g": a5,
        ...v3,
    };
    return o6;
}
JSON.parse(JSON.stringify([f4(f4(v3)).g]));
gc();
