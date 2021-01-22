





function kilometerToMeter(distanceKm) {
    if (distanceKm < 0) {
        var distanceMeter = 'Inappropriate Input'
    }
    else {
        var distanceMeter = distanceKm * 1000;
    }
    return distanceMeter;
}





function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        var total = "Inappropriate Input"            //This condition disallows the negative numbers
    }
    else if(Math.ceil(watch)!= Math.floor(watch) || Math.ceil(phone)!=Math.floor(phone)|| Math.ceil(laptop)!=Math.floor(laptop)){
        var total = "Inappropriate Input"           //This condition disallows the fractional numbers
    }
    else {
        var watchTotalPrice = watch * 50;
        var phoneTotalPrice = phone * 100;
        var laptopTotalPrice = laptop * 500;
        var total = watchTotalPrice + phoneTotalPrice + laptopTotalPrice;
    }
    return total;
}





function hotelCost(days) {
    var paymentForDays = Math.ceil(days);          // For fractional days, we have to pay the bill of the whole day
    if (days < 0) {
        var cost = 'Inappropriate Input';
    }
    else if (days <= 10) {
        var cost = paymentForDays * 100;
    }
    else if (days <= 20) {
        var cost = 1000 + (paymentForDays - 10) * 80;        // $1000 is for first 10 days
    }
    else {
        var cost = 1800 + (paymentForDays - 20) * 50;        // $1800 is for first 20 days
    }
    return cost;
}





function megaFriend(str) {
    var longestName = '';
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (element.length > longestName.length) {
            longestName = element;
        }
    }
    return longestName;
}