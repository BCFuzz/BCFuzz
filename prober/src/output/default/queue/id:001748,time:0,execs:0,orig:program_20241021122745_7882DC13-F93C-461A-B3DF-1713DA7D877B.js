for (let v1 = 0; v1 < 5; v1++) {
    const t1 = "species";
    delete t1[v1];
}
gc();
