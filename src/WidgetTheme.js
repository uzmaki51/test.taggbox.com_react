import React from "react";
import "./widget-theme.css";
import blankblackImage from "./blankblackImage.png"

class WidgetTheme extends React.Component {
  constructor(props) {
    super(props);

  };

  blankImage = (ev) => {
    ev.target.src = {blankblackImage}
  }

  render() {

   
    const person = this.props.activeCardId !== null ? this.props.dataFromParent[this.props.activeCardId] : {};

    return (
      <>

        <div className="widgetTheme_wrap">

          <a href="https://taggbox.com/" target="_blank"
             style={{display: this.props.newApi.wall.UserDetail.planId === 42 ? '' : 'none'}}
          >

            <div className="theme49_poweredBy">
              <span style={{ color: this.props.shmorFont , borderRadius: 4 , fontWeight: 800 , backgroundColor: this.props.shmorBack , position: "fixed", "border": "1px solid"}} >

                <img src="https://app.taggbox.com/img/powered_by/taggbox-icon-PoweredBy.png" width="28" />{''}Powered by Taggbox
  </span>

            </div>
          </a>



        <div id="wPosts" className="isotope theme49 single_widget_theme" style={{ height: 'inherit', position: 'relative' }}>

          <div className="grid-sizer flatCard col-ms-6 col-xs-12"></div>

          {this.props.dataFromParent.map((person, key) => {

            let video;
         
            
           
            if ((person.type === 2) || (person.type === 4)) {
            
              video = (<div className="image"><img className="imagelazy img-fluid img-responsive" src={person.postFileNew} alt="" /> </div>)
            }

            else if (person.type === 1) { console.log("onlyTextCard"); }

            else if ((person.type === 3) || (person.type === 5)) {
           
              video = (<div className="image" > <img className="img-fluid" src={person.postFileNew}  onError={this.blankImage} alt="" />
                <div className="videoIcon">  <img src="https://app.taggbox.com/img/play.png" alt="" />  </div>
              </div>)
            }
                       
              return (<>
                         
                <div id={`"postId${person.id}`} className={`feedId58195 postItem item flatCard ${person.network.description}Taggbox completeFadeIn`} data-post-id={person.id} data-highlight={person.highlight} data-pin={person.pin} style={{ padding: person.personalization.padding / 2, margin: 0, minWidth: 'auto', left: 5, top: 0 }} data-created={person.createdAt}   >
                  <div className="post" style={{ backgroundColor: person.font.cardColor }}>

                    <div className="postContent"
                      onClick={() => { this.props.isMobile ? this.props.mobileCondition(person) : this.props.toggleCard(key, person); this.props.openModal(); this.props.displayIndex(key) }}
                    >

                      <h4 margin-top="0px">

                        {this.props.networkCard(person)}

                        {this.props.authorDetails(person)}

                      </h4>
            
                      {video}
                      <div className="postContentCard" >
                        {this.props.actionCTA(person)}

                        {this.props.fontFamUpper(person)}

                        {this.props.fontFam(person)}

                      </div>

                    </div>
            
                    {this.props.socialActions(person)}
                    
                    <div className="shareWrapper">

                      {this.props.shareWrapperTheme49(person)}

                    </div>


                  </div></div>
            
            
              </>)
                       
            })}
            
            </div>
                       
        {this.props.bannerFunBottom()}

          
{(this.props.newApi.error_code === 203 || this.props.newApi.error_code === 207 || this.props.newApi.error_code === 201
  || this.props.newApi.error_code === 202 || this.props.newApi.error_code === 204 || this.props.newApi.error_code === 205
  || this.props.newApi.error_code === 206 || this.props.newApi.error_code === 208 || this.props.newApi.error_code === 209
  || this.props.newApi.error_code === 211 || this.props.newApi.error_code === 212)
  ? '' : this.props.PopupOnOff(person)}

        {this.props.PopupOnOff(person)} 
        </div>


<div className={`clearfix col-md-12 text-center loadMoreWrapper loadmorebtn${this.props.newApi.wall.Personalization.theme} loadmoreThemetype1`} style={{ marginBottom: 0}} >

{this.props.ShowmoreCond()}

</div>

      </>
            


        )
    }


}


export default WidgetTheme;