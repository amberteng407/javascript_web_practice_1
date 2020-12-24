function showMobileMenu(){
    let mobileMenu=document.querySelector("#mobile-menu"); /* HTML DOM基礎: 根據ID取得對應的標籤 */
    mobileMenu.style.display="block"; /* 原本display=none, 呼叫函式使行動選單可以展現 */
}
function closeMobileMenu(){
    let mobileMenu=document.querySelector("#mobile-menu");
    mobileMenu.style.display="none";
}