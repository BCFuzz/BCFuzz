for (let v2 = 0; v2 < 5; v2++) {
    delete Date["growable"];
}
gc();
