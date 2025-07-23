function f0(a1, a2) {
    const o3 = {
        ...a1,
    };
    switch (a1) {
        case o3:
            break;
    }
    return f0;
}
for (let v4 = 0; v4 < 10; v4++) {
    f0(v4, v4);
}
gc();
