import { useRef, useState } from "react"
import "./aboutPageStyle.css"

const parallaxLayers=[
    [90,25,-10, "https://images.unsplash.com/photo-1598887790298-ff87be733362?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    [0,90,-10, "https://images.unsplash.com/photo-1634467435669-831f777a6432?q=80&w=640&h=640&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    [25,80,-20, "https://images.unsplash.com/photo-1559628019-e73aae8d2a98?q=80&w=640&h=790&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    [30,25,10 , "https://images.unsplash.com/photo-1630142896875-d71a6ee6db03?q=80&w=640&h=600&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    [57,9,3, "https://images.unsplash.com/photo-1615053835734-7752878e939e?q=80&w=640&h=500&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    [60,64,4, "https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
]

export default ()=>{
    const [focusAddon, setFocusAddon]=useState(0)

    const githubSection = useRef(null)
    const iklimselFarkindalikSection = useRef(null)

    const startGithub = ()=> githubSection.current.scrollIntoView({behavior:"smooth"})
    const startIklimselFarkindalik = ()=> iklimselFarkindalikSection.current.scrollIntoView({behavior:"smooth"})
    
    const switchPFocus = ()=> {
        if (focusAddon === 0) return setFocusAddon(-12)
        setFocusAddon(0)
    }
    return(<>
        <section>
            <h1>Hoş Geldiniz!</h1>
            <div className="lineup">
                <p>Bu internet sayfasında ben size iklimsel değişikliğin enerji ile ilişkisinden bahsetmeyi amaçladım. Birbirleriyle iç içe girmiş bir makarna oluşturmaktan kaçınmak için ise her enerji kaynağı için ayrı bir sayfa oluşturmaya karar verdim. Navigasyon çubuğundan hangi sayfaya gitmek istediğinize karar verebilirsiniz.</p>
            </div>
            <fieldset className="contents">
                <legend>İçindekiler</legend>
                <button onClick={startIklimselFarkindalik} className="startButton">İklimsel Farkındalık</button>
                <button onClick={startGithub} className="startButton">Github</button>
            </fieldset>
        </section>
        
        <section ref={iklimselFarkindalikSection}>
            {parallaxLayers.map((el,i)=>
                <img
                 style={{right:el[0]+"%", bottom:el[1]+"%", transform:`translateZ(${ el[2]+focusAddon }px)`}}
                 loading="lazy" 
                 key={i}
                 className="parallaxPhotos"
                 src={el[3]}
                />
            )}

            
            <div id="paralax-text-container">
                <p onClick={switchPFocus}>Bu internet sitesini üretirken oluşturduğum <a target="_blank" href="https://murat-karakaya.github.io/iklimsel-yenilik/">İklimsel Farkındalık</a> projesinden yararlandım. İklimsel değişiklik büyük ve karmaşık bir problemdir. O yüzden eğer iklimsel değişiklik hakkında derin ve köklü bir kaynak araştırması yapmak istiyorsanız siz de <a target="_blank" href="https://murat-karakaya.github.io/iklimsel-yenilik/">İklimsel Farkındalık</a> projemden yararlanabilirsiniz 😇.</p>
            </div>
        </section>

        <section ref={githubSection}>
            <p>Bu internet sitesine katkıda bulunmak istiyorsanız bu sitenin kodları Github'da <a target="_blank" href="https://github.com/Murat-Karakaya/iklim-enerji">iklim-enerji</a> deposunda bulabilirsiniz. Eğer diğer projelerimi de merak ediyorsanız onları da <a href="https://github.com/Murat-Karakaya">Github'dan</a> bulabilirsiniz. 😉</p>
            
            <div className="linkLineup"
                style={{width:"100%", justifyContent:"center", columnGap:"10%"}}>
                <a target="_blank" href="https://github.com/Murat-Karakaya/iklim-enerji"><img loading="lazy" style={{"--order":"0"}} className="reveal logo" alt="Website Logo" src="/favicon.svg"/></a>
                <a target="_blank" href="https://github.com/Murat-Karakaya"><img loading="lazy" style={{"--order":"1"}} className="reveal logo" alt="Developers Logo" src="/murat-logo.png"/></a>
            </div>
        </section>

        <section></section>
    </>)
}
