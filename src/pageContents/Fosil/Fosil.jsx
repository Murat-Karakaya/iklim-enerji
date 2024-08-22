import { useRef } from "react"

export default ()=>{

    const introSection = useRef(null)
    const sourcesSection = useRef(null)
    const coalSection = useRef(null)

    const startIntroSection = () => introSection.current.scrollIntoView({behavior: "smooth"})
    const startSourcesSection = ()=> sourcesSection.current.scrollIntoView({behavior:"smooth"})
    const startCoalEnergy = ()=> coalSection.current.scrollIntoView({behavior:"smooth"})
    
    return(<>
        <section>
            <h1 className="repeating-moving-bg gradient-text">Fosil Yakıtlar ve Enerji</h1>

            <fieldset className="contents">
                <legend>İçindekiler</legend>
                <button onClick={startIntroSection} className="startButton">Giriş</button>
                <button onClick={startCoalEnergy} className="startButton">Kömür-Enerji</button>
                <button onClick={startSourcesSection} className="startButton">Kaynakça</button>
            </fieldset>
        </section>
        
        <section ref={introSection}>
            <h2>Giriş</h2>
            <p className="article-p">Günümüzde fosil yakıtlar dünyanın sürekli artan enerji ihtiyacının karşılanmasında çok önemli bir rol oynamaktadır. Bu sayfada fosil yakıtlar ile enerji arasındaki ilişkiyi araştırmaya çalıştım. Fosil yakıtların pek çok örneği vardır<sup onClick={startSourcesSection}>1</sup>. Ancak enerji bakımından bütün fosil yakıtlar benzer verime sahip için bu sayfada en sık kullanılan fosil yakıt olan kömürü ele almaya karar verdim<sup onClick={startSourcesSection}>2</sup>. Ancak bilinmeli ki her ne kadar fosil yakıtlar enerji verimi bakımından birbirleriyle benzer olsalar da kömür için geçerli olan veriler diğer fosil yakıtları yansıtmayabilir.</p>
        </section>
        
        <section>
            <div className="place-center">
            <h2 ref={coalSection}>Kömür-Enerji İlişkisi</h2>
            <p className="article-p"> Kilogram başına elde edilebilecek enerji miktarı 30MJ'dur<sup onClick={startSourcesSection}>3</sup> ve kömürden elde edilen her MWh elektriğin başına 109 dolar kâr elde edilir. Ancak bu sayı farklı kömür türlerine, enerji elde etme yöntemlerine vs. bağlı olarak büyük bir değişkenlik gösterebilir.</p>
            <article className="cutoff-article">
                <div className="article-child">
                    <p className="article-p"> Aşağıda kömürden enerji elde etmenin kolaylıklarına ve zorluklarına farklı bakış açılarından bakarak size sunmaya çalıştım. </p>

                    <h3>1. Depolama</h3>
                    <p className="article-p"> Kömür depolama bakımından oldukça kolaydır. Bunun sebebi pek çok enerji kaynağından ve hatta diğer fosil yakıtlardan farklı olarak sadece kasalara konabilir<sup onClick={startSourcesSection}>4</sup>. Örneğin doğal gaz tüplerde saklanması gerekir; yenilenebilir enerji kaynakları ise doğrudan saklanamaz, onlardan enerji elde etmek için bataryalara ihtiyaç vardır. Bataryalarla enerji depo etmek oldukça çetrefilli bir iştir. Aşağıda bu sorun hakkında bir video vardır.</p>

                    <iframe loading="lazy" src="https://www.youtube.com/embed/r4OWMSG4Agg?si=_B4ZTniHlg82OD8D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    <br />
                    <h3>2. Bulunabilirlik</h3>
                    <p className="article-p"> Kömür pek çok yerde bulunabilecek bir madendir. Örneğin nükleer enerji üretimi yapabilmek için uranyum (U-235), bor karbür gibi madenlere ihtiyaç vardır<sup onClick={startSourcesSection}>5</sup> <sup onClick={startSourcesSection}>6</sup>. Ve bu madenlere kömür kadar sık karşılaşılmaz. Kömürden her zaman enerji elde edilebilir. Ancak yenilenebilir enerjilerde aynı durum geçerli olmayabilir. Örneğin güneş panelleri geceleri ve kışın verimsiz çalışmaktadır. </p>


                    <h3>3. Fiyat</h3>
                    <p className="article-p"> 2010 ve öncesinde Kömürden enerji elde etmek diğer enerji kaynaklarına kıyasla oldukça ucuzdu . Ancak son zamanlarda yenilenebilir enerji kaynakları çok hızlı bir şekilde ucuzladığı için artık yenilenebilir enerji kaynaklarına kıyasla daha pahalıdır <sup onClick={startSourcesSection}>4</sup>. O yüzden Dünya genelinde kömür tüketimi sabit kalmaya ve hatta bazı ülkelerde azalmaya başlamıştır <sup onClick={startSourcesSection}>8</sup> <sup onClick={startSourcesSection}>9</sup>. Bunlarla birlikte Türkiye Fen Lisesi 9. Sınıf Fizik ders kitabına göre fosil yakıtların rezervleri sınırlı olduğu için enerji verimliliği açısından uygun olmayan kaynaklardır. Ancak kömürden yenilenebilir enerjiye geçmek için zaten var olan kömür ocaklarından değil, yeni türbinler ve güneş panelleri üreterek oradan enerji elde etmeyi gerektirmektedir. </p>
                </div>
            </article>
            <div className="expand-btn-container">
                <input
                 className="expand-btn" 
                 type="checkbox" 
                 onClick={() => {
                    startCoalEnergy()
                 }} 
                />
            </div>    
            </div>
            
        </section>

        <section ref={sourcesSection}>
            <ol>
                <li><a className="source-links" href="https://education.nationalgeographic.org/resource/fossil-fuels/" target="_blank">education.nationalgeographic.org/resource/fossil-fuels/</a></li>
                <li><a className="source-links" href="https://iea.blob.core.windows.net/assets/acaecb98-4430-4395-a4fa-d1a4d5ccb3d3/EnergyEfficiencyIndicatorsforPublicElectricityProductionfromFossilFuels.pdf" target="_blank">iea.blob.core.windows.net/assets/acaecb98-4430-4395-a4fa-d1a4d5ccb3d3/EnergyEfficiencyIndicatorsforPublicElectricityProductionfromFossilFuels.pdf</a></li>
                <li><a className="source-links" href="https://www.toppr.com/ask/question/the-amount-of-energy-released-in-burning-1-kg-of-coal-is/" target="_blank">toppr.com/ask/question/the-amount-of-energy-released-in-burning-1-kg-of-coal-is/</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=edBJ1LkvdQQ" target="_blank">youtube.com/watch?v=edBJ1LkvdQQ</a></li>
                <li><a className="source-links" href="https://world-nuclear.org/information-library/nuclear-fuel-cycle/introduction/what-is-uranium-how-does-it-work.aspx" target="_blank">world-nuclear.org/information-library/nuclear-fuel-cycle/introduction/what-is-uranium-how-does-it-work.aspx</a></li>
                <li><a className="source-links" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7287577/" target="_blank">ncbi.nlm.nih.gov/pmc/articles/PMC7287577/</a></li>
                <li><a className="source-links" href="https://sites.google.com/view/sources-can-we-fix-climate/" target="_blank">sites.google.com/view/sources-can-we-fix-climate/</a></li>
                <li><a className="source-links" href="https://ourworldindata.org/grapher/coal-consumption-by-region" target="_blank">ourworldindata.org/grapher/coal-consumption-by-region</a></li>
                <li><a className="source-links" href="https://www.youtube.com/watch?v=LxgMdjyw8uw" target="_blank">youtube.com/watch?v=LxgMdjyw8uw</a></li>
            </ol>
        </section>
    </>)
}