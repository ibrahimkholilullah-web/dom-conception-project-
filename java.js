function getElementByIdChack (id){
    return parseFloat(document.getElementById(id).value)
}
document.getElementById('income').addEventListener('input', function(){
    const incomeValidate = getElementByIdChack('income')
    if(incomeValidate < 0 ){
       return document.getElementById('income-error').classList.remove('hidden')
    }
});

document.getElementById('calculate').addEventListener('click', function(){
    const incone = getElementByIdChack('income')
    const software = getElementByIdChack('software')
    const courses = getElementByIdChack('courses')
    const internet = getElementByIdChack('internet')
    if(software <= 0 || isNaN(software)){
    return document.getElementById('software-error').classList.remove('hidden')
    }
    if(courses <= 0 || isNaN(courses)){
    return document.getElementById('courses-error').classList.remove('hidden')
    }
    if(internet <=0 || isNaN(internet)){
    return document.getElementById('internet-error').classList.remove('hidden')
    }
    const totelCost = software + courses + internet ;
    const totelIncomeCost = incone - totelCost;
    if(totelCost > incone){
        return document.getElementById('logic-error').classList.remove('hidden')
    }
    const result = document.getElementById('results');
    result.classList.remove('hidden')
    document.getElementById('total-expenses').innerText = totelCost.toFixed(2);
    document.getElementById('balance').innerText = totelIncomeCost.toFixed(2);
   
});
document.getElementById('calculate-savings').addEventListener('click', function(){
    const incone = getElementByIdChack('income')
    const software = getElementByIdChack('software')
    const courses = getElementByIdChack('courses')
    const internet = getElementByIdChack('internet')
    const totelCost = software + courses + internet ;
    const totelIncomeCost = incone - totelCost;
    const saving = getElementByIdChack('savings');
    const savingAmount = (saving * totelIncomeCost) / 100;
    if(totelIncomeCost < savingAmount){
        return document.getElementById('savings-error').classList.remove('hidden')
    }
    const remainingBalance = totelIncomeCost - savingAmount;
    document.getElementById('savings-amount').innerText = savingAmount.toFixed(2);
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
    const div = document.createElement('div');
    div.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";
    div.innerHTML = `
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Totel Incone : $${incone}</p>
    <p class="text-xs text-gray-500">Totel Cost : ${totelCost}</p>
    <p class="text-xs text-gray-500">Saving : ${savingAmount}</p>
    `
    const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(div, historyContainer.firstChild);
});

document.getElementById('history-tab').addEventListener('click', function(){
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden')
    const historyTab = document.getElementById('history-tab');
    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    document.getElementById('assistant-tab').classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
   
});

document.getElementById('assistant-tab').addEventListener('click', function(){
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden')
    const historyTab = document.getElementById('history-tab');
    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    document.getElementById('assistant-tab').classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
});
