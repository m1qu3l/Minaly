(()=>{
    fetch("img.json")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(res =>{
        res.img.forEach((e, key)=> {
            document.querySelectorAll("img")[key].src = e.src
        });
    })
    .catch(err =>{
        console.log(err)
    })
    .finally(()=>{
        setTimeout(()=>{
            document.querySelector(".carga").classList.add("carga_activo")
        }, 2500)
    })
})();

(()=>{
    const obser = new IntersectionObserver((entradas)=>{
        entradas.forEach(e =>{
            e.isIntersecting ? e.target.classList.add("c_img_all") 
            : e.target.classList.remove("c_img_all");
        })
    }, {
        rootMargin : "-100px",
        thresholds : .8
    })
    document.querySelectorAll(".c img").forEach(e =>{
        obser.observe(e)
    })
})();
