const categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'siamese', parent: 'cats' },
];

const makeTree = (categories, parent) => {
    const node = {};
    categories
        .filter((c) => c.parent === parent)
        .forEach((c) => node[c.id] = makeTree(categories, c.id));

    return node;
}

console.log(JSON.stringify(makeTree(categories, null), null, 2));
