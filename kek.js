const removeFirstNoPoison =(potions) => {
    const first = potions[0];
    if (first === 'poison'){
        return null;
    } else {
    potions.shift();
    return potions;
  }
}
