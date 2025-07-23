for (let i = 0; i < 5; i++) {
    const o8 = {
        toString(a1, a2) {
            const t3 = this.__proto__.toLocaleString().constructor;
            const v6 = new t3();
            return v6.search(a2, a1, a2);
        },
    };
    const v9 = o8.toString();
    o8.toString(v9, o8, o8, v9, v9);
}
for (let v11 = 0; v11 < 96; v11++) {
    ("function").search(v11);
}
gc();
