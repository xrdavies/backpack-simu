function simulateRedPacket(totalAmount, totalNum, minAmount, precision) {
    const result = [];
    let remainingAmount = totalAmount;
    let remainingNum = totalNum;

    for (let i = 0; i < totalNum - 1; i++) {
        const max = remainingAmount / remainingNum * 2;

        const amount = Math.floor(Math.random() * (max / precision)) * precision


        // 应用最低金额限制
        const roundedAmount = Math.max(amount, minAmount);

        result.push(roundedAmount.toFixed(0));

        remainingAmount -= roundedAmount;
        remainingNum--;
    }

    // 最后一个红包直接使用剩余的金额
    const finalAmount = Math.max(remainingAmount, minAmount);
    const roundedAmount = Math.floor(finalAmount * precision) / precision;
    result.push(roundedAmount.toFixed(0));

    return result;
}

// 示例用法
const totalAmount = 200000; // 总金额
const totalNum = 20; // 总分数
const minAmount = 1000; // 最低金额限制
const precision = 100; // 金额精度

const redPacket = simulateRedPacket(totalAmount, totalNum, minAmount, precision);
console.log(redPacket.join('\n'));