const buildStack = () => {
  let items = [];

  const push = (item) => (items = [item, ...items]);
  const pop = () => (items = items.slice(1));
  const peek = () => items[0];
  const isEmpty = () => !items.length;
  const size = () => items.length;

  return {
    push,
    pop,
    peek,
    isEmpty,
    size,
  };
};
