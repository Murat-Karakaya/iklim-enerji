import { useRef, useState } from "react"
import "./aboutPageStyle.css"
import parallaxLayers from "./parallaxLayers"

export default ()=>{
    const [focusAddon, setFocusAddon]=useState(0)
    
    const switchPFocus = () => {
        if (focusAddon === 0) return setFocusAddon(-12)
        setFocusAddon(0)
    }
    return(<>
        <section>
            <h1 className="repeating-moving-bg gradient-text">Hoş Geldiniz!</h1>

            <p>Bu internet sayfasında ben size iklimsel değişikliğin enerji ile ilişkisinden bahsetmeyi amaçladım. Birbirleriyle iç içe girmiş bir makarna oluşturmaktan kaçınmak için ise her enerji kaynağı için ayrı bir sayfa oluşturmaya karar verdim. Navigasyon çubuğundan hangi sayfaya gitmek istediğinize karar verebilirsiniz.</p>
        </section>
        
        <section id="parallax-section">
            {parallaxLayers.map((el,i)=>
                <img
                 style={{right:el[0]+"%", bottom:el[1]+"%", transform:`translateZ(${ el[2]+focusAddon }px)`}}
                 loading="lazy" 
                 key={i}
                 className="parallaxPhotos"
                 src={el[3]}
                 alt={el[4]}
                />
            )}

            
            <div id="paralax-text-container">
                <p onClick={switchPFocus}>Bu internet sitesini üretirken oluşturduğum <a target="_blank" href="https://murat-karakaya.github.io/iklimsel-yenilik/">İklimsel Farkındalık</a> projesinden yararlandım. İklimsel değişiklik büyük ve karmaşık bir problemdir. Ve ben bu sayfada tüm enerji kaynaklarına değinemedim -jeotermal gibi-. O yüzden eğer iklimsel değişiklik hakkında derin ve köklü bir kaynak araştırması yapmak istiyorsanız siz de <a target="_blank" href="https://murat-karakaya.github.io/iklimsel-yenilik/">İklimsel Farkındalık</a> projemden yararlanabilirsiniz 😇.</p>
            </div>
        </section>

        <section>
            <p>Bu internet sitesine katkıda bulunmak istiyorsanız bu sitenin kodları Github'da <a target="_blank" href="https://github.com/Murat-Karakaya/iklim-enerji">iklim-enerji</a> deposunda bulabilirsiniz. Eğer diğer projelerimi de merak ediyorsanız onları da <a href="https://github.com/Murat-Karakaya">Github'dan</a> bulabilirsiniz. 😉</p>
            
            <div
             className="linkLineup"
             style={{width:"100%", justifyContent:"center", columnGap:"10%"}}
            >
                <a
                 className="logo-a" 
                 target="_blank" 
                 href="https://github.com/Murat-Karakaya/iklim-enerji"
                >
                    <img
                     loading="lazy" 
                     style={{"--order":"0"}} 
                     className="reveal logo" 
                     alt="Website Logo" 
                     src="/favicon.png"
                    />
                </a>
                <a
                 className="logo-a" 
                 target="_blank" 
                 href="https://github.com/Murat-Karakaya"
                >
                    <img
                     loading="lazy" 
                     style={{"--order":"1"}} 
                     className="reveal logo" 
                     alt="Developer Logo" 
                     src="/murat-logo.png"
                    />
                </a>
            </div>
        </section>

        <section></section>
    </>)
}