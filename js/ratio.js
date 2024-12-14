document.addEventListener('DOMContentLoaded', () => {
    const countryGroups = document.querySelectorAll('.country-group');
    const infoBox = document.getElementById('info');

    countryGroups.forEach(group => {
        group.addEventListener('mouseover', () => {
            const doctor = group.querySelector('.doctor');
            const info = group.querySelector('.flag').getAttribute('data-info');
            infoBox.innerHTML = info;
            infoBox.classList.add('active');

            // 让 doctor 元素变色
            doctor.classList.add('hover');
            console.log("mouseover");
            console.log(infoBox.classList);
        });

        group.addEventListener('mouseleave', () => {
            infoBox.classList.remove('active');

            // 移除 doctor 元素的变色
            const doctor = group.querySelector('.doctor');
            doctor.classList.remove('hover');
        });
    });
});