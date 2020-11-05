module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  // If enhancement is equal to 20 then enhancement remains 20
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    // If enhancement is less than 20 then 1 is added to enhancement
    return { ...item, enhancement: item.enhancement + 1 };
  }
}

function fail(item) {
  // If enhancement is less than 15 the 5 is subtracted from  durability
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement >= 15) {
    // If enhancement is greater than 16 then 1 is subtracted from enhancement and 10 subtracted from durability
    if (item.enhancement > 16) {
      return {
        ...item,
        enhancement: item.enhancement - 1,
        durability: item.durability - 10,
      };
    }
    // If enhancement is is 15 or 16 then only durability is lessened by 10
    return { ...item, durability: item.durability - 10 };
  }
  return { ...item };
}

// Sets durability of new item to 100
function repair(item) {
  return { ...item, durability: 100 };
}

// Stretch item
function get(item) {
  // If enhancement is equal to 0 then the item's name remains the same
  if (item.enhancement === 0) {
    return { ...item };
  } else {
    // If the enhancement level is greater than 0, the name should include the enhancement value, preceded by a plus sign ( + ), between
    // square brackets before the item's name.
    return { ...item, name: `[+${item.enhancement}] ${item.name}` };
  }
}

