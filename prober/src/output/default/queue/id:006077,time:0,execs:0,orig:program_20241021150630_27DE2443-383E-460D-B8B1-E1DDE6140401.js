for (let v1 = 0; v1 < 10; v1++) {
    for (const v2 of "c") {
        v2.concat();
    }
}
gc();
