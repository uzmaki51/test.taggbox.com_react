import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from "react-slick";
import "./horizontal-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class HorizontalsliderTheme extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const person = this.props.activeCardId !== null ? this.props.dataFromParent[this.props.activeCardId] : {};
        var settingsSlider = {
            dots: false,
            nav: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            swipeToSlide: true,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        };

        return (
            <>
                <div className='themeHorizontalSlider' >

                    <a href="https://taggbox.com/" target="_blank"
                    style={{display: this.props.newApi.wall.UserDetail.planId === 42 ? '' : 'none'}}>

                        <div className="theme16_poweredBy">
                        <span style={{ color: this.props.shmorFont , borderRadius: 4 , fontWeight: 800 ,"border": "1px solid", borderColor: 'white', backgroundColor: "rgba(0,0,0,.7)"  }} >

                                <img src="https://app.taggbox.com/img/powered_by/taggbox-icon-PoweredBy.png" width="28"  /> Powered by Taggbox
                            </span>

                        </div>
                    </a>
          
                    <div id="wPosts" className="theme16 test owl-carousel owl-theme owl-loaded owl-drag"
                        style={{
                            height: "inherit",
                            marginTop:

                                this.props.newApi.wall.CustomBanner.status === 1 ?
                                    (((this.props.heightt - this.props.newApi.wall.CustomBanner.banner_height) - (300)) / 2)
                                    :
                                    ((this.props.heightt - 300) / 2)
                        }}>

                        <Slider {...settingsSlider}>

                            {this.props.dataFromParent.map((person, key) => {

                      
                                let video;
                            

                                if (person.theme48.class1 === "onlyImageText" || person.theme48.class1 === "onlyImageCard") {
                              
                                    video = (
                                        <div className="image">

                                            <div className="postImg imagelazy img-responsive"
                                          
                                                style={{ backgroundImage: 'url(' + person.postFileNew + ')', minHeight: 300, backgroundPosition: 'center center ', backgroundSize: 'cover' }}>

                                            </div>
                                        </div>

                                    )
                                }

                                else if (person.theme48.class1 === "onlyTextCard") { console.log("onlyTextCard"); }


                                else if (person.theme48.class1 === "onlyImageText onlyVideoText") {
                          
                                    video = (<div className="image"
                                        style={{ backgroundImage: 'url(' + person.postFileNew + ')' }}
                                    >
                                        <div className="videoIcon">  <img src="https://app.taggbox.com/img/play.png" alt="" />
                                           
                                        </div>
                                    </div>)
                                }


                                return (<>

                                    <div id={`"postId${person.id}`} className={`feedId${person.feedId} postItem item flatCard appliedchLimit autoBold`}
                                        data-post-id={person.id} data-highlight={person.highlight}
                                        data-pin={person.pin}
                                        data-created={person.createdAt} >
                                        <div className="post" style={{ border: 0 }}  >
                                            <div className="postContent"
                                                onClick={() => { this.props.isMobile ? this.props.mobileCondition(person) : this.props.toggleCard(key, person); this.props.openModal(); this.props.displayIndex(key) }}>
                                            
                                                {video}
                                                {this.props.networkCard(person)}
                                                <div className="postContentCard" >
                                                    {this.props.fontFam(person)}
                                                    <h4>{this.props.authorDetails(person)}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            })}


                            {this.props.bannerFunBottom()}

                        </Slider>


                    

                          
{(this.props.newApi.error_code === 203 || this.props.newApi.error_code === 207 || this.props.newApi.error_code === 201
    || this.props.newApi.error_code === 202 || this.props.newApi.error_code === 204 || this.props.newApi.error_code === 205
    || this.props.newApi.error_code === 206 || this.props.newApi.error_code === 208 || this.props.newApi.error_code === 209
    || this.props.newApi.error_code === 211 || this.props.newApi.error_code === 212)
    ? '' : this.props.PopupOnOff(person)}
                    </div>
                </div>

            </>
        )
    }
}


export default HorizontalsliderTheme;