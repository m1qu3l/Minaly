(()=>{
    document.querySelectorAll(".c").forEach((e, key)=>{
        key % 2 == 0 ? e.classList.add("c_l") : e.classList.add("c_r");
    })
})();

(()=>{
    document.querySelectorAll(".c img").forEach((e, key)=>{
        key % 2 == 0 ? e.classList.add("c_l_img") : e.classList.add("c_r_img")
        e.addEventListener("click", ()=>{
            let actiPa = key % 2 == 0 ? "c_l_pa_activo" : "c_r_pa_activo", 
            actiImg = key % 2 == 0 ? "c_l_img_activa" : "c_r_img_activa";
            document.querySelectorAll(".c .pa").forEach((e, key)=>{
                let actiPa = key % 2 == 0 ? "c_l_pa_activo" : "c_r_pa_activo",
                actiImg = key % 2 == 0 ? "c_l_img_activa" : "c_r_img_activa";
                e.classList.remove(actiPa)
                document.querySelectorAll(".c img")[key].classList.remove(actiImg)
            })
            e.classList.add(actiImg)
            document.querySelectorAll(".c .pa")[key].classList.add(actiPa)
        })
    })
})();

(()=>{
    document.querySelectorAll(".c .pa").forEach((e, key)=>{
        e.addEventListener("click", ()=>{
            let actiPa = key % 2 == 0 ? "c_l_pa_activo" : "c_r_pa_activo", 
            actiImg = key % 2 == 0 ? "c_l_img_activa" : "c_r_img_activa";
            e.classList.remove(actiPa)
            document.querySelectorAll(".c img")[key].classList.remove(actiImg)
        })
    })
})();

(()=>{
    let texto = document.querySelector("header h1").textContent;
    document.querySelector("header h1").textContent = ""
    for (let i = 0; i < texto.length; i++) {
        document.querySelector("header h1").innerHTML += `<i>${texto[i]}</i>`
    }
})();