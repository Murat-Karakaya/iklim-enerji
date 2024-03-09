import { useRef } from "react"

export default ()=>{

    const introSection = useRef(null)
    const sourcesSection = useRef(null)
    const hidroSection = useRef(null)

    const startIntroSection = () => introSection.current.scrollIntoView({behavior: "smooth"})
    const startSourcesSection = ()=> sourcesSection.current.scrollIntoView({behavior:"smooth"})
    const startHidroEnergy = ()=> hidroSection.current.scrollIntoView({behavior:"smooth"})
    
    return(<>
        <section>
            <h1 className="repeating-moving-bg gradient-text">Hidrolik Enerji ve İklim</h1>

            <fieldset className="contents">
                <legend>İçindekiler</legend>
                <button onClick={startIntroSection} className="startButton">Giriş</button>
                <button onClick={startHidroEnergy} className="startButton">Hidrolik Enerji</button>
                <button onClick={startSourcesSection} className="startButton">Kaynakça</button>
            </fieldset>
        </section>
        
        <section ref={introSection}>
            <h2>Giriş</h2>
            <p className="article-p"> Hidrolik enerji günümüzde en sık kullanılan yanilebilir enerji türüdür ve kullanımı sürekli artmaktadır<sup onClick={startSourcesSection}>1</sup>. Ancak her enerji türünde olduğu gibi bu hidrolik enerjinin de birtakım ptoblemleri vardır. Hidrolik enerjinin neredeyse tamamı barajlardan karşılanmaktadır. O yüzden de ben daha çok barajlardan elde edilen enerji üzerinden elde ettiğim bilgileri sunmaya çalışacağım.</p>
        </section>
        
        <section>
            <div className="place-center">
            <h2 ref={hidroSection}>Hidrolik Enerji ve İklim İlişkisi</h2>
            <p className="article-p"> Barajlardan enerji elde etmenin bazı yararlarının yanında birtakım sorunlar da gelmektedir. Bakalım onlar nelerdir?</p>
            <article className="cutoff-article">
                <div className="article-child">

                    <h3>1. Depolama</h3>
                    <p className="article-p"> Hidrolik enerjideki depolama diğer enerji kaynaklarına göre nispeten kolaydır. Çünkü rüzgar ve güneş enerjisinin aksine suyun barajlarda bekletilip sadece ihtiyaç olunduğu zaman salınacağı şekilde barajlar üretilebilir. Ancak yine de bazı mevsimler daha çok yağış olurken diğer mevsimler daha kurak geçebileceği için elde edilen enerji farklı mevsimlere göre değişkenlik gösterebilir. Bu gibi sebeplerden dolayı hidrolik enerjide depolama çözüm isteyen bir sorundur.</p>

                    <br />
                    <h3>2. Çevresel Etkileri</h3>
                    <p className="article-p"> Hidrolik enerji her ne kadar yenilebilir enerji olsa da beraberinde özellikle tatlı su ekosistemleri için çevresel sorunlar getirmektedir. Bununla birlikte yine de çevre için fosil yakıtlardan daha uygundur. Bu yüzden de iklim değişikliğini durdurmak isteyen organizasyonlar tarafından üretimi desteklenmektedir. Aşağıda bu durum hakkında bir video verilmiştir.</p>
                    <iframe loading="lazy" src="https://www.youtube.com/embed/GTFDVZU-Nv0?si=gHbdB3pd70z-wzx4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    <h3>3. Fiyat</h3>
                    <p className="article-p"> Bir baraj üretmek her ne kadar zor olsa da elde edilen kâr gayet büyüktür. Hatta genellikle fosil yakıtlardan daha kârlıdır<sup onClick={startSourcesSection}>4</sup>. Büyük anlamda o yüzden de hidroil enerji kullanımı da yıllar geçtikçe artmıştır<sup onClick={startSourcesSection}>3</sup>.</p>
                </div>
            </article>
            <div className="expand-btn-container">
                <input className="expand-btn" type="checkbox" onClick={startHidroEnergy} />
            </div>    
            </div>
            
        </section>

        <section ref={sourcesSection}>
            <ol>
                <li><a className="source-links" href="https://ourworldindata.org/renewable-energy" target="_blank">eourworldindata.org/renewable-energy</a></li>
                <li><a className="source-links" href="https://www.encyclopedie-energie.org/en/hydraulic-storage-and-power-generation/" target="_blank">encyclopedie-energie.org/en/hydraulic-storage-and-power-generation/</a></li>
                <li><a className="source-links" href="https://ourworldindata.org/renewable-energy" target="_blank">ourworldindata.org/renewable-energy</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=edBJ1LkvdQQ" target="_blank">youtube.com/watch?v=edBJ1LkvdQQ</a></li>
            </ol>
        </section>
    </>)
}