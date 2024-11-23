
function convertToLiters(amount, fuelType) {
    const fuelPrices = {
      "АИ-92": 60,
      "АИ-95": 74,
      "АИ-98": 85,
      "ДТ": 68,
      "Газ": 28
    };
  
    if (!(fuelType in fuelPrices)) {
      return "Неизвестный тип топлива!";
    }
  
    const pricePerLiter = fuelPrices[fuelType];
  
    const liters = amount / pricePerLiter;
    return liters;
  }
  
  const amount = parseFloat(prompt("Введите сумму в сомах:"));
  const fuelType = prompt("Введите тип топлива (АИ-92, АИ-95, АИ-98, ДТ, Газ):");
  
  if (isNaN(amount)) {
    alert("Ошибка: введите корректное числовое значение для суммы.");
  } else {
    const liters = convertToLiters(amount, fuelType);
    
    if (typeof liters === "string") {
      alert(liters);
    } else {
      alert(`За ${amount} сомов вы получите ${liters} литров ${fuelType}.`);
    }
  }
  