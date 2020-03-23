import React from "react";
import Slider from "react-slick";
import "./horizontalColumns.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./all-fonts1.css";
import "./users.css";
import "./custom-modal.css"
import "./ugc-pro-modal.css";
import "./bootstrap-grid.css"
import "./fontawesome.min.css";

class HorizontalcolumnTheme extends React.Component{

    constructor(props){
        super(props);
    };

    render(){

        const person = this.props.activeCardId !== null ? this.props.dataFromParent[this.props.activeCardId] : {};
        var bgOpacity = (this.props.shmorBack).concat('b3')

        var settings = {
            dots: false,
            nav:true,
            infinite: true,
            speed: 1600,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
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

            <div className='horizontalColumns'>

            <a href="https://taggbox.com/" target="_blank"
            style={{display: this.props.newApi.wall.UserDetail.planId === 42 ? '' : 'none'}}>

              <div className="theme47_poweredBy">
              <span style={{ color: "black" , borderRadius: 4 , fontWeight: 800 ,"border": "1px solid", borderColor: 'white', backgroundColor: bgOpacity  }} >

                  Powered by Taggbox
                </span>

              </div>
            </a>

                <div id="wPosts" className="theme47" >
                    <Slider {...settings}>

                        {this.props.dataFromParent.map((person, key) => {

                            let video;
                      
                            if ((person.theme48.class1 === "onlyImageText" || "onlyImageCard") && person.theme48.class1 !== "onlyImageText onlyVideoText") {
                           
                                video = (
                                    <div className="image"><img className="imagelazy img-fluid" src={person.postFileNew} alt="" /> </div>

                                )
                            }

                            else if (person.theme48.class1 === "onlyTextCard") { console.log("onlyTextCard"); }


                            else if (person.theme48.class1 === "onlyImageText onlyVideoText") {
                            
                                video = (<div className="image" > <img src={person.postFileNew} alt="" />
                                    <div className="videoIcon">  <img src="https://app.taggbox.com/img/play.png" alt="" />
                                        <div className="postNetwork" style={{ color: person.font.iconColor }} data-network={person.network.name}  >
                                        
                                        </div>  </div>
                                </div>)
                            }


               return (
               

                   <div id={`"postId${person.id}`} className={`feedId58195 postItem item flatCard ${person.network.description}Taggbox ${person.theme48.class1 === 'onlyTextCard' ? 'onlyTextCard' : ''} ${person.personalization.textDecorate === 1 ? 'decorateTxt' : ''} completeFadeIn`} data-post-id={person.id} data-highlight={person.highlight} data-pin={person.pin} data-created={person.createdAt}   >

                       <div className="post" style={{ backgroundColor: person.font.cardColor }}>


                           <div className="postContent"
                               onClick={() => { this.props.isMobile ? this.props.mobileCondition(person) : this.props.toggleCard(key, person); this.props.openModal(); this.props.displayIndex(key) }}>

                               {video}

                               <div className="postContentCard" >
                                   <h4 margin-top="0px">{this.props.authorDetails(person)} {this.props.networkCard(person)}</h4>
                                   {this.props.actionCTA(person)}
                                   {this.props.fontFam(person)}
                               </div>

                           </div>

                                        {this.props.socialActions(person)}

                                    </div>

                                </div>


                            )

                        })}

                        {this.props.bannerFunBottom()}
                    </Slider>

                </div>

                  
{(this.props.newApi.error_code === 203 || this.props.newApi.error_code === 207 || this.props.newApi.error_code === 201
  || this.props.newApi.error_code === 202 || this.props.newApi.error_code === 204 || this.props.newApi.error_code === 205
  || this.props.newApi.error_code === 206 || this.props.newApi.error_code === 208 || this.props.newApi.error_code === 209
  || this.props.newApi.error_code === 211 || this.props.newApi.error_code === 212)
  ? '' : this.props.PopupOnOff(person)}

               

            </div>
        )
    }
}


export default HorizontalcolumnTheme;