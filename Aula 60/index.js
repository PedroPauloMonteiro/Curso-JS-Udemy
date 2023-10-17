function recursiva(max) {
    console.log(max);
    if (max >= 100000) return;
    max++;
    recursiva(max);
}

recursiva(0);