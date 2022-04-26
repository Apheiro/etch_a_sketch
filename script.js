const settingBtn = document.querySelector('#settingsBtn');
const settingMenu = document.querySelector('#settingMenu')
const resolutionBtn = document.querySelector('#resolutionGrid');
const visibleGridBtn = document.querySelector('#visibleGrid');
const nightModeBtn = document.querySelector('#nightMode');
const backgroundBtn = document.querySelector('#background');
const settingOpt = [resolutionBtn, visibleGridBtn, nightModeBtn, backgroundBtn];
const upBtn = document.querySelector('#upBtn')


function expandSetting(e) {
    console.log(this.classList.value)
    e.stopPropagation();
    settingMenu.style = "transition: all 1s cubic-bezier(0.7, -0.31, 0.02, 1.38) 0s; max-height: 418px; animation: fadeIn; animation-duration: 0.75s; pointer-events: none;";
    setTimeout(() => settingMenu.style = "transition: all 1s cubic-bezier(0.7, -0.31, 0.02, 1.38) 0s; max-height: 418px; animation: fadeIn; animation-duration: 0.75s;", 1200);
    setTimeout(() => settingOpt.forEach(button => button.style = "display: flex; animation: fadeIn; animation-duration: 0.75s;"), 1000);
    setTimeout(() => upBtn.style = "display: flex; animation: fadeIn; animation-duration: 0.75s;", 1500);
}

function contractSetting(e) {
    e.stopPropagation();
    settingMenu.style = "transition: all 1s cubic-bezier(0.7, -0.31, 0.02, 1.38) 0s; max-height: 418px; animation: fadeIn; animation-duration: 0.75s; pointer-events: none;";
    settingOpt.forEach(button => button.style = "animation: fadeOut; animation-duration: 0.75s; display: flex;");
    setTimeout(() => settingOpt.forEach(button => button.style = ""), 735);
    setTimeout(() => settingMenu.style = "transition: all 1s cubic-bezier(0.7, -0.31, 0.02, 1.38) 0s; max-height: 68px; pointer-events: none;", 300);
    setTimeout(() => settingMenu.style = "transition: all 1s cubic-bezier(0.7, -0.31, 0.02, 1.38) 0s; max-height: 68px;", 735);
    setTimeout(() => upBtn.style = "animation: fadeOut; animation-duration: 0.75s; display: flex;", 200);
    setTimeout(() => upBtn.style = "", 735);   
}
settingBtn.addEventListener('click', expandSetting);
upBtn.addEventListener('click', contractSetting);