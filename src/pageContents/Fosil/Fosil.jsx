import { useRef } from "react"

export default ()=>{

    const introSection = useRef(null)
    const sourcesSection = useRef(null)
    const githubSection = useRef(null)
    const coalSection = useRef(null)

    const startIntroSection = () => introSection.current.scrollIntoView({behavior: "smooth"})
    const startSourcesSection = ()=> sourcesSection.current.scrollIntoView({behavior:"smooth"})
    const startGithub = ()=> githubSection.current.scrollIntoView({behavior:"smooth"})
    const startCoalEnergy = ()=> coalSection.current.scrollIntoView({behavior:"smooth"})
    
    return(<>
        <section>
            <h1 className="repeating-moving-bg gradient-text">Fosil Yakıtlar ve Enerji</h1>

            <fieldset className="contents">
                <legend>İçindekiler</legend>
                <button onClick={startIntroSection} className="startButton">Giriş</button>
                <button onClick={startCoalEnergy} className="startButton">Kömür-Enerji</button>
                <button onClick={startGithub} className="startButton">Github</button>
            </fieldset>
        </section>
        
        <section ref={introSection}>
            <h2>Giriş</h2>
            <p className="text-align-left">Günümüzde fosil yakıtlar dünyanın sürekli artan enerji ihtiyacının karşılanmasında çok önemli bir rol oynamaktadır. Bu sayfada fosil yakıtlar ile enerji arasındaki ilişkiyi araştırmaya çalıştım. Fosil yakıtların pek çok örneği vardır <sup onClick={startSourcesSection}>1</sup>. Ancak enerji bakımından bütün fosil yakıtlar benzer verime sahip için bu sayfada en sık kullanılan fosil yakıt olan kömürü ele almaya karar verdim <sup onClick={startSourcesSection}>2</sup>. Ancak bilinmeli ki her ne kadar fosil yakıtlar enerji verimi bakımından birbirleriyle benzer olsalar da kömür için geçerli olan veriler diğer fosil yakıtları yansıtmayabilir.</p>
        </section>
        
        <section>
            <div className="place-center"> {/* This container is used for disabling the grid properties of section */}
            <article className="cutoff-article place-center">
                <h2 ref={coalSection}>Kömür-Enerji İlişkisi</h2>
                <p className="text-align-left">Kilogram başına elde edilebilecek enerji miktarı 30MJ'dur <sup onClick={startSourcesSection}>3</sup>. Ancak bu sayı farklı kömür türlerine, enerji elde etme yöntemlerine vs. bağlı olarak büyük bir değişkenlik gösterebilir. Bu sayı nükleer enerjiye kıyasla çok daha düşük olsa da kömürün bazı avantajlarından dolayı kömürden enerji elde etmek pek çok durumda çok daha kolaydır.</p>
                <h3>1. Depolama</h3>
                <p className="text-align-left">Kömür depolama bakımından oldukça kolaydır. Bunun sebebi pek çok enerji kaynağından ve hatta diğer fosil yakıtlardan farklı olarak sadece kasalara konabilir <sup onClick={startSourcesSection}>4</sup>. Örneğin doğal gaz tüplerde saklanması gerekir; yenilenebilir enerji kaynakları ise doğrudan saklanamaz, onlardan enerji elde etmek için bataryalara ihtiyaç vardır. Bataryalarla enerji depo etmek oldukça çetrefilli bir iştir. Aşağıda bu sorun hakkında bir video vardır.</p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/r4OWMSG4Agg?si=_B4ZTniHlg82OD8D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </article>
            <div className="expand-btn-container">
                <input className="expand-btn" type="checkbox" />
            </div>
            </div>
        </section>

        <section ref={githubSection}>
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
                     src="/favicon.svg"
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
                     alt="Developers Logo" 
                     src="/murat-logo.png"
                    />
                </a>
            </div>
        </section>

        <section ref={sourcesSection}>
            <ol>
                <li><a href="https://education.nationalgeographic.org/resource/fossil-fuels/" target="_blank">education.nationalgeographic.org/resource/fossil-fuels/</a></li>
                <li><a href="https://iea.blob.core.windows.net/assets/acaecb98-4430-4395-a4fa-d1a4d5ccb3d3/EnergyEfficiencyIndicatorsforPublicElectricityProductionfromFossilFuels.pdf" target="_blank">iea.blob.core.windows.net/assets/acaecb98-4430-4395-a4fa-d1a4d5ccb3d3/EnergyEfficiencyIndicatorsforPublicElectricityProductionfromFossilFuels.pdf</a></li>
                <li><a href="https://www.toppr.com/ask/question/the-amount-of-energy-released-in-burning-1-kg-of-coal-is/" target="_blank">toppr.com/ask/question/the-amount-of-energy-released-in-burning-1-kg-of-coal-is/</a></li>
                <li><a href="https://www.youtube.com/watch?v=edBJ1LkvdQQ" target="_blank">youtube.com/watch?v=edBJ1LkvdQQ</a></li>
            </ol>
        </section>
    </>)
}