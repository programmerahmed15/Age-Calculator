document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById('result').textContent = `You are ${age} years old.`;
});
