// Challenge 1: Tính BMI và so sánh BMI giữa Mark và John
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// Tính BMI trực tiếp cho Mark và John
let markBMI = (markMass / markHeight ** 2).toFixed(2);
let johnBMI = (johnMass / johnHeight ** 2).toFixed(2);

// So sánh BMI của Mark và John
let markHigherBMI = markBMI > johnBMI;

console.log('-------------------------------------');

// Challenge 2 - Task 1: In kết quả so sánh BMI
if (markHigherBMI) {
    console.log('Mark\'s BMI is higher than John\'s!');
} else {
    console.log('John\'s BMI is higher than Mark\'s!');
}

// Task 2: In kết quả so sánh BMI với giá trị cụ thể
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

console.log('-------------------------------------');

// Challenge 3: Tính điểm trung bình và so sánh giữa Dolphins và Koalas
let dolphinsScore1 = 96, dolphinsScore2 = 108, dolphinsScore3 = 89;
let koalasScore1 = 109, koalasScore2 = 95, koalasScore3 = 123;

// Tính điểm trung bình của Dolphins và Koalas
let avgDolphinScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
let avgKoalaScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// Kiểm tra xem có điểm số nào nhỏ hơn 100 hay không
let dolphinsMinScoreLessThan100 = (dolphinsScore1 < 100 || dolphinsScore2 < 100 || dolphinsScore3 < 100);
let koalasMinScoreLessThan100 = (koalasScore1 < 100 || koalasScore2 < 100 || koalasScore3 < 100);

// So sánh điểm trung bình và in kết quả
if (avgDolphinScore > avgKoalaScore) {
    if (!dolphinsMinScoreLessThan100) {
        console.log('No team is winner');
    } else {
        console.log('Dolphins are the winner!');
    }
} else if (avgDolphinScore === avgKoalaScore) {
    if (!dolphinsMinScoreLessThan100) {
        console.log('No team is winner');
    } else {
        console.log('Dolphins and Koalas are Equal!');
    }
} else {
    if (!koalasMinScoreLessThan100) {
        console.log('No team is winner');
    } else {
        console.log('Koalas are the winner!');
    }
}

console.log('-------------------------------------');

// Challenge 4: Tính tiền tip trực tiếp
let bill = 275;
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and total value ${bill + tip}`);
console.log('-------------------------------------');


