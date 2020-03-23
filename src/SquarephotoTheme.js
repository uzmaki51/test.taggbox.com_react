import React from 'react';
import 'rodal/lib/rodal.css';
import "./square-photo.css";
import "./custom-modal.css";
import "./ugc-pro-modal.css";

class SquarephotoTheme extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {

    var ua = window.navigator.platform


    const person = this.props.activeCardId !== null ? this.props.dataFromParent[this.props.activeCardId] : {};


    if (ua === "Win32") {
      // console.log("ie")
      var cardNumber = (this.props.width - 17) / (this.props.postWidth)
   
    }
    else {
      // console.log("Not ie")
      var cardNumber = (this.props.width - 4) / (this.props.postWidth)
    
    }


    var rowCard = Math.trunc(cardNumber)
   
    if (ua === "Win32") {
      var spacing = (this.props.width - 17) % this.props.postWidth
   
      var adjustSpacing = spacing / rowCard;
     
    }

    else {
      var spacing = (this.props.width - 4) % this.props.postWidth
     
      var adjustSpacing = spacing / rowCard;
     
    }


    if (cardNumber >= 1) {
      var adjustWidth = this.props.postWidth + adjustSpacing;
   
    }
    else {
      var adjustWidth = this.props.postWidth - adjustSpacing;
    
    }
    return (
      <>
        <div className="themeSquarePhoto">

          {

            <a href="https://taggbox.com/" target="_blank"
              style={{ display: this.props.newApi.wall.UserDetail.planId === 42 && this.props.newApi.wall.Personalization.filterStatus !== 1 ? '' : 'none' }}>

              <div className="theme4_poweredBy">
                <span style={{ color: this.props.shmorFont, borderRadius: 4, fontWeight: 800, "border": "1px solid", borderColor: 'white', backgroundColor: "#151515" }} >

                  <img src="https://app.taggbox.com/img/powered_by/taggbox-icon-PoweredBy.png" width="28" /> Powered by taggbox
                  </span>

              </div>
            </a>
          }




          <div id="wPosts" className="isotope theme4 " style={{ position: "relative", height: "inherit", }}>
            {this.props.dataFromParent.map((person, key) => {

              let video;
          
              if ((person.type === 2) || (person.type === 4)) {
           
                video = (

                  <div className="image">

                    <div className="blur-bg"

                      style={{ backgroundImage: 'url(' + person.postFileNew1 + ')' }}
                      alt="" effect="blur" ></div>


                  </div>)
              }

        
              else if (person.type === 1) {
              
              }

        
              else if ((person.type === 3) || (person.type === 5)) {
             
                video = (<div className="image" >

                  <div className="blur-bg" style={{ backgroundImage: 'url(' + person.postFileNew1 + ')' }} alt="" effect="blur"></div>
                  <div className="videoIcon">  <img src="https://app.taggbox.com/img/play.png" alt="" />  </div>

                </div>)
              }


              return (<>

     
                <div id={`"postId${person.id}`} className={`feedId${person.feedId} postItem item flatCard col-ms-6 col-xs-12 ${person.network.description}Taggbox ${person.theme48.class1 === 'onlyTextCard' ? 'onlyTextCard' : ''} completeFadeIn autoBold appliedchLimit `} data-post-id={person.id} data-highlight={person.highlight} data-pin={person.pin}
                  style={{ padding: person.personalization.padding / 2, margin: 0, width: adjustWidth > this.props.postWidth ? adjustWidth : this.props.width, minWidth: 'auto', height: adjustWidth > this.props.postWidth ? adjustWidth : this.props.width, left: 0, top: 0 }} data-created={person.createdAt}   >
                  <div className="post" style={{ backgroundColor: person.font.cardColor }}>


                    <div className="postContent"
                      onClick={() => { this.props.isMobile ? this.props.mobileCondition(person) : this.props.toggleCard(key, person); this.props.openModal(); this.props.displayIndex(key) }}>

          
                      {video}
                      {this.props.networkCard(person)}
                      <div className="postContentCard" >
                    
                        <div className="rating" style={{ display: person.network.name === "Yelp" ? "" : "none" }}>

                          <img src={`https://app.taggbox.com/img/rating/${person.rating}.png`}></img>
                        </div>


                        {this.props.fontFam(person)}

                        <h4 margin-top="0px">


                          {this.props.authorDetails(person)}


                        </h4>


                        {this.props.shareOptions(person)}

                      </div>

                    </div>


                    {this.props.socialActions(person)}


                  </div></div>
         

              </>
              )

            })}



            {this.props.bannerFunBottom()}

            {this.props.PopupOnOff(person)}



          </div>

        </div>

        <div className={`clearfix col-md-12 text-center loadMoreWrapper loadmorebtn${this.props.newApi.wall.Personalization.theme} loadmoreThemetype1`} style={{ marginBottom: 0 }} >
       
          {this.props.ShowmoreCond()}

        </div>


      </>


    )
  }
}

export default SquarephotoTheme;
