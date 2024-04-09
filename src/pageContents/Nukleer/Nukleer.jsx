import { useRef } from "react"

export default ()=>{

    const introSection = useRef(null)
    const sourcesSection = useRef(null)
    const nuklearSection = useRef(null)

    const startIntroSection = () => introSection.current.scrollIntoView({behavior: "smooth"})
    const startSourcesSection = ()=> sourcesSection.current.scrollIntoView({behavior:"smooth"})
    const startNuklearEnergy = ()=> nuklearSection.current.scrollIntoView({behavior:"smooth"})
    
    return(<>
        <section>
            <h1 className="repeating-moving-bg gradient-text">Nükleer Enerji</h1>

            <fieldset className="contents">
                <legend>İçindekiler</legend>
                <button onClick={startIntroSection} className="startButton">Giriş</button>
                <button onClick={startNuklearEnergy} className="startButton">Nükleer Enerji</button>
                <button onClick={startSourcesSection} className="startButton">Kaynakça</button>
            </fieldset>
        </section>
        
        <section ref={introSection}>
            <h2>Giriş</h2>
            <p className="article-p">Günümüzde nükleer enerji fosil yakıtların kullanımının azaltılmasında önemli bir rol oynamaktadır<sup onClick={startSourcesSection}>1</sup> <sup onClick={startSourcesSection}>2</sup> <sup onClick={startSourcesSection}>3</sup>. Bu sayfada ise ben nükleer enerji ile iklim arasındaki ilişkiyi size göstermeye çalıştım.</p>
        </section>
        
        <section>
            <div className="place-center">
            <h2 ref={nuklearSection}>Nükleer Enerji ve İklim İlişkisi</h2>
            <p className="article-p">Nükleer enerjiden kilogram başına elde edilebilecek enerji miktarı 86400000MJ'dur <sup onClick={startSourcesSection}>4</sup> ve nükleer enerjiden elde edilen her MWh elektriğin başına ortalama 155 dolar harcanır<sup onClick={startSourcesSection}>5</sup>.</p>
            <article className="cutoff-article">
                <div className="article-child">
                    <h3>1. Nükleer Enerjiyle Ne Kadar Kâr Edilir?</h3>
                    <p className="article-p"> Nükleer enerjide MWh başına elde edilen kâr fosil yakıtlardan düşüktür. Ancak aslında bunun birtakım facia ve sorunlar sonucu nükleer enerji üzerine yapılan araştırmaların büyük anlamda yavaşlamasının büyük bir etkisi vardır. Ve yeni teknolojik gelişmeler sayesinde nükleer enerjinin daha güvenli ve daha verimli bir hâl alabileceği düşünülmektedir<sup onClick={startSourcesSection}>6</sup>. Bununla birlikte Türkiye "Fen Lisesi 9. Sınıf Fizik" kitabına göre nükleer santrallerden enerji elde etmenin de kendine göre uzun vadede kolaylıkları vardır.</p>

                    <h3>2. Nükleer Enerji Diğer Sorunlar</h3>
                    <p className="article-p"> Nükleer enerjinin en büyük sorunlarından bir tanesi nükleer atıklarla nelerin yapılabileceğinin aslında çok da bilinmemesidir. Başka bir sorun ise elde edilen atıkla nükleer silah üretilme riski olmasıdır. Aşağıda da bu gibi sorunlar hakkında bir video verilmiştir</p>

                    <iframe loading="lazy" src="https://www.youtube.com/embed/HEYbgyL5n1g?si=4KtLDlYfPUEfCIYj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    <br />
                    <h3>2. Nükleer Enerji Faydaları</h3>
                    <p className="article-p"> Bazı sorunları olsa da aslında nükleer santraller çevre için uygun sayılabilecek enerji kaynaklarıdır<sup onClick={startSourcesSection}>1</sup> <sup onClick={startSourcesSection}>2</sup> <sup onClick={startSourcesSection}>3</sup>. Hatta şaşılacak bir şekilde elde edilen MWh enerji başına salınan karbondioksit miktarının en az olduğu enerji kaynaklarından biridir<sup onClick={startSourcesSection}>5</sup>. Bu durum aşağıdaki videolarda ifade edilmiştir.</p>
                    <iframe loading="lazy" src="https://www.youtube.com/embed/pVbLlnmxIbY?si=p_ZIsX3JE1bFtDZ3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe loading="lazy" src="https://www.youtube.com/embed/EhAemz1v7dQ?si=800OtfyvmsQFfO8f" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </article>
            <div className="expand-btn-container">
                <input className="expand-btn" type="checkbox" onClick={startNuklearEnergy} />
            </div>
            </div>
            
        </section>

        <section ref={sourcesSection}>
            <ol>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=EhAemz1v7dQ" target="_blank">youtube.com/watch?v=EhAemz1v7dQ</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=Jzfpyo-q-RM" target="_blank">youtube.com/watch?v=Jzfpyo-q-RM</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=pVbLlnmxIbY" target="_blank">youtube.com/watch?v=pVbLlnmxIbY</a></li>
                <li><a className="source-links" href="https://www.euronuclear.org/glossary/fuel-comparison" target="_blank">euronuclear.org/glossary/fuel-comparison</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=edBJ1LkvdQQ" target="_blank">youtube.com/watch?v=edBJ1LkvdQQ</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=INl3pCXm6Tw" target="_blank">youtube.com/watch?v=INl3pCXm6Tw</a></li>
            </ol>
        </section>
    </>)
}