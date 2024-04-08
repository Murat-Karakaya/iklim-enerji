import { useRef } from "react"

export default ()=>{

    const introSection = useRef(null)
    const sourcesSection = useRef(null)
    const renewablesSection = useRef(null)

    const startIntroSection = () => introSection.current.scrollIntoView({behavior: "smooth"})
    const startSourcesSection = ()=> sourcesSection.current.scrollIntoView({behavior:"smooth"})
    const startRenewablesSection = ()=> renewablesSection.current.scrollIntoView({behavior:"smooth"})
    
    return(<>
        <section>
            <h1 className="repeating-moving-bg gradient-text">Yenilenebilir Enerjiler ve İklim</h1>

            <fieldset className="contents">
                <legend>İçindekiler</legend>
                <button onClick={startIntroSection} className="startButton">Giriş</button>
                <button onClick={startRenewablesSection} className="startButton">Yenilenebilir Enerji</button>
                <button onClick={startSourcesSection} className="startButton">Kaynakça</button>
            </fieldset>
        </section>
        
        <section ref={introSection}>
            <h2>Giriş</h2>
            <p className="article-p"> Yenilebilir enerji kaynaklarının çevreye olan etkisi benzer oldukları için onları hep birlikte ele almaya karar verdim. Bu enerji kaynakları her ne kadar çevre için yararlı olabilse de braberinde birtakım sorunlar getirmektedir. Bakalım onlar nelerdir?</p>
        </section>
        
        <section>
            <div className="place-center">
            <h2 ref={renewablesSection}>Yenilebilir Enerjiler ve İklim İlişkisi</h2>
            <p className="article-p"> Yenilebilir Enerjilerin kullanımı sürekli artmaktadır<sup onClick={startSourcesSection}>1</sup>. Bunun sebebi büyük oranda yenilebilir enerjinin daha da ucuz olmaya başlaması ve onların çevreye olan yaralarına dair bilincin artmasıdır<sup onClick={startSourcesSection}>2</sup>.</p>
            <article className="cutoff-article">
                <div className="article-child">

                    <h3>1. Depolama</h3>
                    <p className="article-p"> Depolama yenilebilir enerji kaynaklarında çözülmesi gereken bir sorundur. Çünkü yenilenemez enerji kaynaklarının aksine yenilebilir enerji kaynaklarından enerji elde etmek bizim kontrolümüzün dışında gerçekleşir. O yüzden elde edilen enerjiyi depo etmek zorunda kalırız. Bu durumda da araya bataryalar girer<sup onClick={startSourcesSection}>3</sup>. Ancak ne yazık ki bataryalar da başlı başına ayrı bir sorundur. Ve bataryaların da getirdiği sorunlara çözümler aranmaktadır<sup onClick={startSourcesSection}>4</sup>. Aşağıda bu duruma dair bir video verilmiştir.</p>
                    <iframe loading="lazy" src="https://www.youtube.com/embed/r4OWMSG4Agg?si=GRy9FIA-Mxo4qyi8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    <br />
                    <h3>2. Çevresel Etkileri</h3>
                    <p className="article-p"> Yenilebilir enerjiler çevre için her ne kadar yararlı olsa da bilinçli bir şekilde uğraşılmadığı takdirde çevreye zarar verebilir<sup onClick={startSourcesSection}>5</sup> <sup onClick={startSourcesSection}>6</sup> <sup onClick={startSourcesSection}>7</sup>. Bununla birlikte yine de çevre için fosil yakıtlardan daha uygundur. Bu yüzden de iklim değişikliğini durdurmak isteyen organizasyonlar tarafından üretimi desteklenmektedir.<sup onClick={startSourcesSection}>5</sup> <sup onClick={startSourcesSection}>6</sup></p>

                    <h3>3. Fiyat</h3>
                    <p className="article-p"> Yenilebilir enerji kaynaklarının fiyatı her ne kadar eskiden daha yüksek olmuşsa da günümüzde yenilenebilir enerji santrallerinden elde etmek çok daha kolaylaşmıştır. O yüzden artık yenilenebilir enerjinin kullanımı artmaktadır<sup onClick={startSourcesSection}>1</sup> <sup onClick={startSourcesSection}>2</sup>.</p>
                </div>
            </article>
            <div className="expand-btn-container">
                <input className="expand-btn" type="checkbox" onClick={startRenewablesSection} />
            </div>    
            </div>
            
        </section>

        <section ref={sourcesSection}>
            <ol>
                <li><a className="source-links" href="https://ourworldindata.org/renewable-energy" target="_blank">eourworldindata.org/renewable-energy</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=LxgMdjyw8uw" target="_blank">youtube.com/watch?v=LxgMdjyw8uw</a></li>
                <li><a className="source-links" href="https://www.iec.ch/blog/batteries-renewable-energy-storage" target="_blank">iec.ch/blog/batteries-renewable-energy-storage</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=r4OWMSG4Agg" target="_blank">youtube.com/watch?v=r4OWMSG4Agg</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=GTFDVZU-Nv0" target="_blank">youtube.com/watch?v=GTFDVZU-Nv0</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=HzQShAlObn8" target="_blank">youtube.com/watch?v=HzQShAlObn8</a></li>
                <li><a className="source-links" href="https://medium.com/illumination/heres-why-renewable-energy-can-t-save-the-planet-55330f19a129" target="_blank">medium.com/illumination/heres-why-renewable-energy-can-t-save-the-planet-55330f19a129</a></li>
            </ol>
        </section>
    </>)
}