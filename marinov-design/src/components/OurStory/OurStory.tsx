import React from 'react';
import style from "./style.module.css";
import Header from '@/components/Header/Header';
import UncontrolledExample from './Carousel';

const OurStory = () => {
  return (
  <>
        <Header isHomePage={false}/>
            <div className={style.OurStory}>
                <div className={style.Container}>
                <h1>Our story</h1>
                <p>began in <b>Ohrid in 1913</b> when master craftsman <b>Slave Marinov</b> started shaping copper into high-quality household products.</p>
                </div>
                <div className={style.CopperPotDiv}>
                    <img src="/images/OURSTORYIMAGES/thumb_174741_default_zoomed copy-2 1 (1).png" alt="copperPot" className={style.CopperPot}/>
                </div>
                <div className={style.OhridImgDiv}>
                    <img src="/images/OURSTORYIMAGES/Ohrid_razglednica_1913.png" alt="ohridRazglednica" className={style.OhridImg}/>
                </div>
                <div className={style.CopperAgingDiv}>
                    <h5>Copper oxidizes and changes over time.</h5>
                    <h5>And so has Marinov.</h5>
                    <p>Over the years, our family business has evolved and adapted to changing times, all the while holding on to its rich history and tradition.</p>
                </div>

                <div className={style.Container}>
                    <p>Slave’s skill was passed down to <b>his son Ivan,</b> who expanded the business by introducing <b>souvenirs.</b></p>          
                </div>
                <div className={style.BeltDiv}>
                   <img src="/images/OURSTORYIMAGES/H21725-L197420355_original copy 1.png" alt="belt" className={style.Belt}/>
                </div>
                <div className={style.Container}>
                    <p className={style.Paragraph}>Following in his father’s footsteps, <b>Ivan’s son Slave</b> created the iconic handmade <b>antique helmet,</b> which quickly became a symbol synonymous with our brand.</p>          
                </div>

                <div className={style.SlaveAndHelmet}>
                    <img src="/images/OURSTORYIMAGES/slave.png" alt="slave" className={style.Slave}/>
                    <img src="/images/OURSTORYIMAGES/helmet.png" alt="helmer" className={style.Helmet} />
                </div>
                <div>
                    <img src="/images/OURSTORYIMAGES/Group 51.svg" alt="" />
                </div>

                <div className={style.Container}>
                    <p><b>Today,</b> Slave’s legacy carries on in the hands of <b>his daughter Maria and son Ivan,</b> marking the <b>fourth generation</b> of our family's timeless craft.</p>
                    <div className={style.RingDiv}>
                    <img src="/images/OURSTORYIMAGES/ring.png" alt="ring" className={style.Ring}/>
                    </div>
                    <p>Under Maria's visionary leadership, MARINOV has taken a bold step forward with a fresh perspective, exploring <b>unique and modern jewelry designs.</b></p>
                    <div className={style.BraceletDiv}>
                        <img src="/images/OURSTORYIMAGES/bracelet.png" alt="bracelet" className={style.Bracelet}/>
                    </div>
                    <p className={style.Paragraph}>Using <b>traditional techniques</b> taught by her family, she experiments with new <b>complementary materials</b> and methods of production, mixing <b>past and present</b> to create timeless pieces of jewelry.</p>
                    <h5>Peek Into Our Process</h5>
                </div>

    <UncontrolledExample/>
            </div>
  </>
  )
}

export default OurStory