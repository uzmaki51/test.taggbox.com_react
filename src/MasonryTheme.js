import React from 'react';
import Masonry from "react-masonry-component";
import LazyLoad from 'react-lazyload';
import { isMobile } from "react-device-detect";
import { Modal, Button } from 'antd';
import "./news-card.css"
import "./classic-card.css";

let { Component, Fragment } = React;

class LazyImage extends Component {
  // the following 2 lines will be used to solve the race condition problem
  loadTimer;
  image = new Image();

  componentDidMount() {
    const { loaderIcon } = this.props;

    // the following 2 lines to solve the "race condition" problem
    this.image.src = loaderIcon
      ? loaderIcon
      : "https://www.eliananunes.com/images/lazy_loader.gif";
    this.image.addEventListener("load", this.onImgLoaded);

    // add the lazyLoad method onscroll
    window.onscroll = 
    window.addEventListener("scroll", this.lazyLoad);
  }

  componentWillUnmount() {
    // remove the lazyLoad method
    window.removeEventListener("scroll", this.lazyLoad);
  }

  onImgLoaded = () => {
    if (this.loadTimer !== null) {
      clearTimeout(this.loadTimer);
    }

    if (!this.image.complete) {
      this.loadTimer = setTimeout(() => {
        this.onImgLoaded();
      }, 3);
    } else {
      this.lazyLoad();
    }
  };

  lazyLoad = e => {
    Object.values(this.refs).forEach(el => {
      if (this.elementInViewPort(el)) {
        el.setAttribute("src", el.getAttribute("data-src"));
      }
    });
  };

  elementInViewPort(el) {
    // getBoundingClientRect => returns the size of the given element and the position of it in relation to the view port
    const clientRect = el.getBoundingClientRect();

    return (
      clientRect.top >= 0 &&
      clientRect.left >= 0 &&
      clientRect.bottom <=
        (window.innerHeight + 500 || document.documentElement.clientHeight + 500) &&
      clientRect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  render() {
    const { images, loaderIcon, className } = this.props;

    return (
      <Fragment>
        {
          <img
            ref={"image"}
            src={
              loaderIcon
                ? loaderIcon
                : "https://www.eliananunes.com/images/lazy_loader.gif"
            }
            class={className}
            data-src={images}
          />
        }
      </Fragment>
    );
  }
}
 var imagesLoaded = require('imagesloaded');

 const masonryOptions = {
    transitionDuration: 0,
  
  };


class MasonryTheme extends React.Component{

    constructor(props){
        super(props);
        
    };

  handleLayoutComplete() {
   
   
  }
 
    componentDidMount() {
        this.masonry.on('layoutComplete', this.handleLayoutComplete);
    }
 
    componentWillUnmount() {
        this.masonry.off('layoutComplete', this.handleLayoutComplete);
    }

    hasReachedBottom = () => {

      return (
  
        (window.innerHeight + window.scrollY) >= document.body.offsetHeight
      );
    }


    render(){

      var ua = window.navigator.platform
  

        if(ua === "Win32"){
          // console.log("ie")
          var cardNumber = (this.props.width - 17) / (this.props.postWidth )
       
        }

        else{
        var cardNumber = (this.props.width) / (this.props.postWidth )
        }
     
       
        var rowCard = Math.trunc(cardNumber)
      

        if(ua === "Win32"){ 
          var spacing = (this.props.width - 17) % this.props.postWidth 
      
          var adjustSpacing = spacing / rowCard;
        
        }
        
        else{
        var spacing = (this.props.width) % this.props.postWidth 
         
        var adjustSpacing = spacing / rowCard;
      
        
        }
        if (cardNumber >= 1) {
          var adjustWidth = this.props.postWidth + adjustSpacing;
         
        }
        else {
          var adjustWidth = this.props.postWidth - adjustSpacing;
        
        }

        return(
          <>


            <a href="https://taggbox.com/" target="_blank"
            style={{display: this.props.newApi.wall.UserDetail.planId === 42 && this.props.newApi.wall.Personalization.filterStatus !== 1 ? '' : 'none'}}>

              <div className={`theme${this.props.newApi.wall.Personalization.theme}_poweredBy`}>
              <span style={{ color: this.props.shmorFont , borderRadius: 4 , fontWeight: 800 ,"border": "1px solid", borderColor: 'white', backgroundColor: this.props.shmorBack 
          
              }} >

                  <img src="https://app.taggbox.com/img/powered_by/taggbox-icon-PoweredBy.png" width="28" /> Powered by Taggbox
               </span>

              </div>
            </a>

            <Masonry  ref={function(c) {this.masonry = this.masonry || c.masonry}.bind(this)}
            id={"wPosts"} onKeyDown ={(e) => this.props.handleKeyPress(e,this.props.filteredPersons)}
            className={`isotope theme${this.props.newApi.wall.Personalization.theme}`} // default ''a {"theme19"}
            elementType={"div"} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoaded} // default {}
            // onLayoutComplete={ }
          //  onImagesLoaded={this.kpr}
    
       
          >

                {this.props.dataFromParent.map((person, key) => {
           
                  var errorimage = "https://app.taggbox.com/img/blank.jpg"
                  let video;
             

                  if ((person.type === 2) || (person.type === 4)) {
                
            
                    video = (

                      <div className="image">
              
                         <LazyImage
                            images={person.postFileNew1}
                            loaderIcon="https://image.freepik.com/free-vector/white-blurred-background_1034-249.jpg"
                            className={`imagelazy blur-image img-responsive ${this.props.newApi.wall.Personalization.blurEffect === 1 ? 'completeLazyLoad' : ''}  `}
                            width="100%"
                         />
                    

                      </div>)
                  }

                   
                  else if (person.type === 1) { 
                  
                   }
                  else if ((person.type === 3) || (person.type === 5)) {
                  
                    video = (<div className="image"  >
                     
                      <img
                        src={person.postFileNew === 'https://aumejtoqen.cloudimg.io/width/400/n/' ? errorimage : person.postFileNew} effect="blur" width="100%" />
                      
                      <div className="videoIcon">  <img src="https://app.taggbox.com/img/play.png" alt="" />  </div>
                    </div>)
                  }


              return (<>
              

                <div >  
                  <div id={`"postId${person.id}`} className={`feedId58195 postItem item flatCard ${person.network.description}Taggbox ${person.theme48.class1 === 'onlyTextCard' ? 'onlyTextCard' : ''} completeFadeIn`} data-post-id={person.id} data-highlight={person.highlight} data-pin={person.pin}

                    style={{ padding: person.personalization.padding / 2, margin: 0, width: adjustWidth > this.props.postWidth ? adjustWidth : this.props.width, minWidth: 0, left: 0, top: 0 }} data-created={person.createdAt}   >

                    <div className="post" style={{ backgroundColor: person.font.cardColor }}>
                                   
                      <div className="postContent"
                  
                    onClick={() => {this.props.popWeb(person) }}> 
                        

                        {video}
                        <div className="postContentCard" >

                        <div className="rating" style={{ display: ((person.network.name === "Yelp" && this.props.newApi.wall.Personalization.theme === 5) || (person.network.name === "Yelp" && this.props.newApi.wall.Personalization.theme === 20))? "" : "none"}}>
                        
                            <img src={`https://app.taggbox.com/img/rating/${person.rating}.png`}></img>
                          </div>


                          {this.props.actionCTA(person)}

                          {this.props.fontFamUpper(person)}
                        
                          
                          <h4 margin-top="0px">
                          
                            {this.props.networkCard(person)}

                            {this.props.authorDetails(person)}
                           

                          </h4>
                         
                          <div className="rating" style={{ display: (person.network.name === "Yelp" && this.props.newApi.wall.Personalization.theme === 19)  ? "" : "none"}}>
                        
                            <img src={`https://app.taggbox.com/img/rating/${person.rating}.png`}></img>
                          </div>

                          {this.props.fontFam(person)}


                          {this.props.shareOptions(person)}

                        </div>

                      </div>


                      {this.props.socialActions(person,key)}


                       </div></div>
              
                 
                       </div>
              </>)


            })}

              <div className={`col-md-12 text-center loadMoreWrapper loadmorebtn${this.props.newApi.wall.Personalization.theme} loadmoreThemetype${this.props.newApi.wall.Personalization.themeType}`} style={{ position: "absolute", display: this.props.newApi.wall.Personalization.autoScrollStatus === 0 ? "block" : "none" }} >


                <div className="appendLoader" style={{ marginBottom: 30, display: this.props.loaderFilter === true ? '' : 'none' }}>
                  <img src="https://app.taggbox.com/image/loader.svg" width="30"></img>
                </div>



                {this.props.ShowmoreCond()}

              </div>

              <div className="col-md-12 text-center loadMoreWrapper loadmoreThemetype1" id="wNoMorePosts" 
              
              style={{ display: this.props.newApi.wall.Personalization.autoScrollStatus === 0 ? 'none' : 'block' }}>

               <a className="loadMoreBtn" >
               {
                 this.props.people.length === 0 && ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) ? 'No More Posts' :
                 this.props.people.length < this.props.postNumber && ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) ? 'No More Posts' :
                ''
           
                 }</a>  

              </div>

              {this.props.bannerFunBottom()}

              </Masonry>
</>
        )
    }

}

export default MasonryTheme;