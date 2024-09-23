const GLAZING_OPTIONS = {
    keep_original: {
      price_adjustment: 0,
      name: "Keep original",
    },
    sugar_milk: {
      price_adjustment: 0,
      name: "Sugar milk",
    },
    vanilla_milk: {
      price_adjustment: 0.5,
      name: "Vanilla milk",
    },
    double_chocolate: {
      price_adjustment: 1.5,
      name: "Double chocolate",
    },
  };
  
  const BASE_PRICE = 2.49;
  
  const PACK_SIZE_OPTIONS = {
    1: 1,
    3: 3,
    6: 5,
    12: 10,
  };
  
  const GLAZING_SELECT_ELEMENT = document.querySelector("select#glazing-choices");
  const PACK_SIZE_SELECT_ELEMENT = document.querySelector(
    "select#pack-size-choices",
  );
  const PRICE_ELEMENT = document.querySelector("span#total-price");
  
  function updatePrice(basePrice, glazingPrice, packPrice) {
    const price = (basePrice + glazingPrice) * packPrice;
    PRICE_ELEMENT.textContent = `$${price.toFixed(2).toString()}`;
  }
  
  for (const option of Object.values(GLAZING_OPTIONS)) {
    const optionElement = document.createElement("option");
    optionElement.value = option.price_adjustment;
    optionElement.textContent = option.name;
  
    GLAZING_SELECT_ELEMENT.appendChild(optionElement);
  }
  
  for (const [size, value] of Object.entries(PACK_SIZE_OPTIONS)) {
    const optionElement = document.createElement("option");
  
    optionElement.value = value;
    optionElement.textContent = size;
  
    PACK_SIZE_SELECT_ELEMENT.appendChild(optionElement);
  }
  
  GLAZING_SELECT_ELEMENT.addEventListener("change", () => {
    updatePrice(
      BASE_PRICE,
      Number.parseFloat(GLAZING_SELECT_ELEMENT.value),
      PACK_SIZE_SELECT_ELEMENT.value,
    );
  });
  
  PACK_SIZE_SELECT_ELEMENT.addEventListener("change", () => {
    updatePrice(
      BASE_PRICE,
      Number.parseFloat(GLAZING_SELECT_ELEMENT.value),
      PACK_SIZE_SELECT_ELEMENT.value,
    );
  });