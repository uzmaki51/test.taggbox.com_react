import React from "react";
import axios from "axios";
import Slider from "react-slick";
import Vimeo from '@u-wave/react-vimeo';
import SkyLight from 'react-skylight';
import { Link, animateScroll as scroll } from "react-scroll";

import ArrowKeysReact from 'arrow-keys-react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import Modal from "react-animated-modal";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactDOM from 'react-dom'
import Masonry from "react-masonry-component";

import Scrollbar from 'react-smooth-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faShare, faTimes, faChevronRight, faChevronLeft, faPlay, faCircle, faThumbsUp, faComment, faRetweet, faHeart, faShareSquare, faQuoteLeft, faQuoteRight, faSpinner, faUser, faRss, faCaretSquareRight, faCaretSquareLeft, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./animate.css";

import "./all-fonts1.css";
import "./users.css";
import "./custom-modal.css"

import "./ugc-pro-modal.css";

import "./news-card.css"
import "./classic-card.css";
import "./bootstrap-grid.css";
import "./gallery-square-photo.css";

import "./multicarousel.css";
import "./fontawesome.min.css";
import MasonryTheme from "./MasonryTheme";
import SquarephotoTheme from "./SquarephotoTheme";
import HorizontalcolumnTheme from "./HorizontalcolumnTheme";
import HorizontalsliderTheme from "./HorizontalsliderTheme";
import WidgetTheme from "./WidgetTheme";
import GallerySquareTheme from "./GallerySquareTheme";

import "./App.css";
import moment from 'moment';
import Iframe from 'react-iframe';
import { isMobile } from "react-device-detect";

import 'react-multi-carousel/lib/styles.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import windowSize from 'react-window-size';
import { exportDefaultSpecifier } from "@babel/types";
import { runInThisContext } from "vm";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1400 },
    items: 5,
    slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 1400, min: 799 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 799, min: 699 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 699, min: 399 },
    items: 2,
    slidesToSlide: 2
  },

  smallmobile: {
    breakpoint: { max: 399, min: 0 },
    items: 1,
    slidesToSlide: 1
  },
};

const reactStringReplace = require('react-string-replace');


library.add(fab, faShare, faTimes, faChevronRight, faChevronLeft, faPlay, faCircle, faThumbsUp, faComment, faRetweet, faHeart, faShareSquare, faQuoteLeft, faQuoteRight ,faSpinner ,faFacebookF ,faUser ,faRss ,faCaretSquareRight ,faCaretSquareLeft , faAngleRight , faAngleLeft,fas , far  )

const masonryOptions = {
  transitionDuration: 0,
   
};



const imagesLoadedOptions = { background: ".my-bg-image-el" };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null,
      counter: 0,
      dateToFormat: '',
      timeStamp: 0,
      modalIsOpen: false,
      vfile: null,
      postCount: true,
      buttonName: "Show More",
      isLoading: true,
      persons: [],
      filteredPersons: [],
      netId: 0,
      filterButton: "All",
      viewOnText: "View on",
      shareText: "SHARE",
      postNumber: 0,
      humans: [],
      IdN: 0,
      activeItemIndex: 0,
      setActiveItemIndex: 0,
      button: false,
      allButton: "off",
      netButton: "off",
      activeNetId: null,
      width: window.innerWidth,
      kp: 0,
      isMouseInside: false,
      loaderFilter: false,
      heartFill: false,
      socialActionId: 0,
      filterColor: -1,
      filterColorOne: -1,
      scrollEnd: false,
      animationRight: 1,
      people: [],
      personArray: [],
      loadMess: 0
    
    };

    this.showMore = this.showMore.bind(this);
  }

  
  changeAll = (event) => {

    event.preventDefault();
    
    this.setState({
      filteredPersons: this.state.persons, netId: 0, counter: 0 ,
      buttonName: "Show More" , allButton: "on" ,netButton: "off" , filterColorOne: 1 , filterColor: -1
    });
  };

  mouseEnter = () => {

    this.setState({ isMouseInside: true });
  }

  mouseLeave = () => {

    this.setState({ isMouseInside: false });
  }

  webFb = (e, networkk, ntid, k) => {
  
     var temVar = k
     
     if (temVar === k) {
       this.setState({ filterColor: k });
     } else {
       this.setState({ filterColor: 100 });
     }
  
     this.setState({ button: false, buttonName: "Show More", allButton: "off", netButton: "on" ,loaderFilter: true , filterColorOne: -1})
 
     var algebra = ntid;
 
 
     if (networkk !== 'instagram' ) {
 
       var humans = this.state.persons.filter(function (h) {
 
         return h.network.description === networkk;
 
       });
     } 
     
     
     else {
 
       var humans = this.state.persons.filter(function (h) {
 
         // return h.network.icon.substring(3) === networkk;
 
       });
     }
 
     this.setState({ humans: humans });
 
     this.setState({
       filteredPersons: humans, netId: ntid,counter: 0,humans:humans
     }, () => {
 
 
         if (humans.length < this.state.postNumber) {
           var n = this.state.postNumber - humans.length;
           axios.get(`https://test.taggbox.com/post/append/${this.state.wid}/${this.state.tstamp}/${n}/${ntid}`).then(
             res => {
            
               var men = Object.keys(res.data.data).map(k => res.data.data[k]);
            
               var manAuto = this.state.filteredPersons.concat(men)
               this.setState({
                 filteredPersons: manAuto ,loaderFilter: false ,
                  buttonName: humans.length === 0 && men.length < this.state.postNumber ? "No More Posts" : "Show More"
               });
             }
           )
         }
 
       
 
         else if (humans.length === this.state.postNumber) {
           this.setState({ filteredPersons: humans, netId: ntid , loaderFilter: false });
          
           
         }
         
       }
 
     );
 
   }
 

 
   webFilter = () => {
   

    if (this.state.newApi.wall.Personalization.filterStatus === 1) {

      var webPersons = Object.keys(this.state.newApi.webFilters).map(k => this.state.newApi.webFilters[k]);
    
      if (webPersons.length >= 2) {
        return (

          <div className={`loaderBlock clickable filterSection filter filter${this.state.filterNumber} `} style={{ textAlign: "center" }}>

            <div className="ff-filter-holder isotopeFIlter19">


              <span className="ff-filter ff-type-all" >

                <a className="filter_poweredBy_a" href="https://taggbox.com/" target="_blank" style={{ display: this.state.newApi.wall.UserDetail.planId !== 42 ? 'none' : '' }}>

                  <div className="widget_filter_poweredBy" style={{
                    backgroundColor: 
                    this.state.filterNumber === 4 || this.state.filterNumber === 3 ? '' :
                    this.state.filterNumber === 1 && this.state.newApi.wall.Personalization.theme !== 4 || this.state.filterNumber === 3 && this.state.newApi.wall.Personalization.theme !== 4 ? this.state.shmorBack :
                    this.state.filterNumber === 1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff"|| this.state.filterNumber === 2 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff" ? this.state.shmorBack :
                    this.state.filterNumber === 1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff"|| this.state.filterNumber === 2 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff" ? 'black' :
                    
                    
                    this.state.shmorBack,
                    
                    
                    color: this.state.filterNumber === 4 || this.state.filterNumber === 3 ? '' : this.state.shmorFont,
                    border: '1 solid', borderColor: this.state.filterNumber !== 3 ? this.state.shmorFont : ''
                  }}>Powered by{' '}
                    <img src="https://app.taggbox.com/img/powered_by/taggbox-icon-PoweredBy.png" width="28"></img>
                  </div>


                </a>
           
              <a href="" data-network="0" data-filter="*" 
            
             style={{ 
               
              backgroundColor: this.state.filterNumber === 4 || this.state.filterNumber === 3 ? '' :
              (this.state.filterNumber === 1 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme !== 4) || (this.state.filterNumber === 2 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme !== 4 ) ? this.state.shmorBack:
              (this.state.filterNumber === 1 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme !== 4) || (this.state.filterNumber === 2 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme !== 4) ? this.state.shmorFont:

              (this.state.filterNumber === 1 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") ? this.state.shmorBack:
              (this.state.filterNumber === 1 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") ? this.state.shmorFont:

              (this.state.filterNumber === 1 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") ? 'black':
              (this.state.filterNumber === 1 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") ? 'white'
             
              : 'yellow'
             
         
            , border: '1 solid'  , borderColor: this.state.filterNumber !== 3 ? this.state.shmorFont : '', 

             color: this.state.filterNumber === 4 ||  this.state.filterNumber === 3 ? '' : 
             (this.state.filterNumber === 1 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme !== 4) || (this.state.filterNumber === 2 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme !== 4) ? this.state.shmorFont:
             (this.state.filterNumber === 1 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme !== 4) || (this.state.filterNumber === 2 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme !== 4) ? this.state.shmorBack:
             
             (this.state.filterNumber === 1 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") ? this.state.shmorFont:
             (this.state.filterNumber === 1 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") ? this.state.shmorBack:
             
             (this.state.filterNumber === 1 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColorOne === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") ? 'white':
             (this.state.filterNumber === 1 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColorOne === 1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") ? 'black':

             'red'
          
          }}
            
            onClick={this.changeAll} on><i className="fa fa-all" style={{display: this.state.filterNumber === 1 || this.state.filterNumber === 2? 'none' : 'inline-block'}}> <FontAwesomeIcon icon={['fa', 'users' ]}/></i>
            
            {this.state.filterNumber !== 3 ? this.state.filterButton : ''}
            
            </a></span>

            {webPersons.map((wp,key) => {

      
              var n = wp.Network.icon;
              var p = wp.Network.name;
              var netwrk = n.substring(3);
          
              var idNetwork = wp.Network.id;
              
    

              return (<>

                {/* //  <span className="ff-filter ff-type-twitter " ><a href="" style={{ backgroundColor: this.state.shmorBack, border: this.state.shmorFont, color: this.state.shmorFont }} onClick={this.filter_fb}><FontAwesomeIcon size="lg" icon={['fab', netwrk]} /></a></span> */}
                <span className="ff-filter ff-type-twitter " >
                  
                  <button target data-network={idNetwork} onDoubleClick={this.test} onClick={(e) => {this.webFb(e ,netwrk ,idNetwork , key)}}  
                  style={{
                     backgroundColor:  this.state.filterNumber === 3 || this.state.filterNumber === 4 ? '' : 
                     (this.state.filterNumber === 1 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme !== 4) || (this.state.filterNumber === 2 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme !== 4) ?  this.state.shmorBack :
                     (this.state.filterNumber === 1 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme !== 4) || (this.state.filterNumber === 2 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme !== 4) ? this.state.shmorFont : 

                     (this.state.filterNumber === 1 && this.state.filterColor !== key && this.state.filterColor !== -1 && this.state.newApi.wall.Personalization.theme !== 4) || (this.state.filterNumber === 2 && this.state.filterColor !== key && this.state.filterColor !== -1 && this.state.newApi.wall.Personalization.theme !== 4) ? this.state.shmorBack : 

                     (this.state.filterNumber === 1 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") ?  this.state.shmorBack :
                     (this.state.filterNumber === 1 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") ? this.state.shmorFont : 
                
                     (this.state.filterNumber === 1 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") ||  (this.state.filterNumber === 2 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") ? 'black':
                     (this.state.filterNumber === 1 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") ? this.state.shmorFont 
                     :
                    //  this.state.shmorBack 
                    (this.state.filterNumber === 1 && this.state.filterColor !== key && this.state.filterColor !== -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColor !== key && this.state.filterColor !== -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") ? 'black':
                    (this.state.filterNumber === 1 && this.state.filterColor !== key && this.state.filterColor !== -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColor !== key && this.state.filterColor !== -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") ? 'white'
                    


                    : 'pink'
                    ,border: '1 solid' ,  
                          
                  borderColor: this.state.filterNumber !== 3 ? this.state.shmorFont : '',

                    color: this.state.filterNumber === 4 || this.state.filterNumber === 3 ? '' :
                    (this.state.filterNumber === 1 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme !== 4) || (this.state.filterNumber === 2 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme !== 4) ? this.state.shmorFont :
                    (this.state.filterNumber === 1 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme !== 4) || (this.state.filterNumber === 2 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme !== 4) ? this.state.shmorBack :
                    (this.state.filterNumber === 1 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") ? this.state.shmorFont :
                    (this.state.filterNumber === 1 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont !== "#ffffff") ? this.state.shmorBack :
                    
                    (this.state.filterNumber === 1 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColor === -1 && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") ? this.state.shmorFont :
                    (this.state.filterNumber === 1 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") || (this.state.filterNumber === 2 && this.state.filterColor === key && this.state.newApi.wall.Personalization.theme === 4 && this.state.shmorFont === "#ffffff") ? 'black' 
                    :this.state.shmorFont
                   

                  }} ><i className={`fa fa-${netwrk}`}> <FontAwesomeIcon icon={netwrk !== 'rss' && netwrk !== 'facebook' ? ['fab', netwrk] : netwrk === 'rss' ? 'rss' : ['fab', 'facebook-f']} /></i> 
                   
                    {/* <FontAwesomeIcon icon="rss" /></i> */}
                  {this.state.filterNumber === 4 && netwrk !== 'vimeo-square' ? netwrk : 
                  this.state.filterNumber === 4 && netwrk === 'vimeo-square' ? p : ''
                  }
                </button></span>
           
            
              </>)
            }, this)
            }

</div>
          </div>
        )
      } else {
        return null;
      }
    }

    else {
      return null;
    }


  }



  showLoadingScreen = () => {

    axios
      .get(
        `https://test.taggbox.com/w/getLoader/${this.state.wallN}`
      )
      .then(res => {

        var loaderDetails = res.data;

        this.setState({

          loaderType: loaderDetails.loder_type, loaderColorOne: loaderDetails.loader_color1,
          loaderColorTwo: loaderDetails.loader_color2
        })

      });



    if (this.state.loaderType === 1) {
      var a = "hello world"

      return (
        <div className="loading">
          <div className="loaderCenterlize">

            <div className="wrapLC loadercircle-side loader1c "
              style={{ borderColor: this.state.loaderColorOne, borderRightColor: this.state.loaderColorTwo, borderTopColor: this.state.loaderColorTwo, borderBottomColor: this.state.loaderColorTwo }}>

            </div>

          </div>
        </div>

      )
    }

    else if (this.state.loaderType === 2) {

      return (

        <div className="loading">
          <div className="loaderCenterlize">
            <div className="wrapLC lds-css ng-scope loader2c ">
              <div className="lds-spinnerStar" style={{ width: 100, height: 100 }}>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
                <div style={{ background: this.state.loaderColorOne }}></div>
              </div>
            </div>

          </div>
        </div>


      )

    }


    else if (this.state.loaderType === 3) {
      return (

        <div className="loading">
          <div className="loaderCenterlize">
            <div className="wrapLC lds-css ng-scope loader3c">
              <div className="lds-double-ring">
                <div id="dring1" style={{ borderTopColor: this.state.loaderColorOne, borderBottomColor: this.state.loaderColorOne }}></div>
                <div id="dring2" style={{ borderLeftColor: this.state.loaderColorTwo, borderRightColor: this.state.loaderColorTwo }}></div>

              </div>
            </div>
          </div>
        </div>
      )

    }


    else if (this.state.loaderType === 4) {
      return (

        <div className="loading">
          <div className="loaderCenterlize">
            <span className="wrapLC loaderCube loader4c" style={{ borderColor: this.state.loaderColorTwo }}><span class="loader-inner" style={{ backgroundColor: this.state.loaderColorOne }}></span></span>
          </div>
        </div>
      )

    }


    else {

      return null

    }

  }


  ShowmoreCond = () => {
    

    // this function is all about the show more button css..not the functionality(click)
    if (this.state.newApi.wall.Personalization.theme !== 16 && this.state.newApi.wall.Personalization.theme !== 49) {
    
      if (this.state.newApi.wall.Personalization.loadMoreStatus === 1) {
        
       
        return (
          <>

          <button id="appendBtn" className="loadMoreBtn ladda-button" data-style="zoom-in" data-spinner-color="#1f1b1b" style={{ display: this.state.loaderFilter === false ? 'inline':'none', marginBottom: 20, backgroundColor: this.state.shmorBack, border: ' 1 solid ' ,borderColor: (this.state.shmorFont === "#ffffff" && this.state.newApi.wall.Personalization.theme === 4) ? 'black' : this.state.shmorFont, 
          
          color: (this.state.shmorFont === "#ffffff" && this.state.newApi.wall.Personalization.theme === 4 ) || ( this.state.shmorFont === "#ffffff" && this.state.newApi.wall.Personalization.theme === 50) ? 'black'
          
          :this.state.shmorFont }}
           
           onClick={this.state.buttonName === "No More Posts" ? '' : this.showMore} >

        {this.state.button === false && this.state.postNumber <=this.state.persons.length ? this.state.buttonName 
        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.w_language === "custom"? 
        
        // 'No More Posts'
        this.state.customLArray[2]
        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === "French" ?
        "Pas plus de messages"
        
        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === "German" ?
        "Keine weiteren Beiträge"

        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === "Malay" ?
        "Tidak ada lagi"

        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === "Dutch" ?
        "Geen berichten meer"

        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === "Spanish" ?
        "No más publicaciones"

        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === "Chinese" ?
        "没有更多的帖子"

        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === "Korean" ?
        "더 이상 게시물 없음"

        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === "Italian" ?
        "Nessun altro messaggio"

        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === "Portuguese" ?
        "Mais mensagens"

        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === "English" ?
        "No More Posts"

        : this.state.button === false && this.state.postNumber > this.state.persons.length && this.state.newApi.wall.Personalization.custom_lan_data !== null && this.state.newApi.wall.Personalization.w_language === null ?	
        "No More Posts"

        :  

          <i className="fa fa-spinner fa-spin "  aria-hidden="true">
            <FontAwesomeIcon icon="spinner" ></FontAwesomeIcon>
          </i>
        }
          </button>
          </>
        )
      } else {
    
        if (this.state.newApi.wall.Personalization.autoScrollStatus === 0) {
          // console.log("show more - OFF and auto scroll - OFF")
          return null;
        }

        else {
          // console.log("show more - OFF and auto scroll - ON")
       
          return (<div >
            {this.hasReachedBottom()} 
          </div>)
        }

      }

    } 
    
    else if(this.state.newApi.wall.Personalization.theme === 49) {

    }
    
    else {
      return null;
    }

  }



  ShowmoreCondOne = () => {

    var ans = "No More Posts"

    if (this.state.persons.length === 0 && this.hasReachedBottom()) {

      return (
        <div>
          {ans}
        </div>
      )
    }
  }

  addDefaultSrc(ev) { ev.target.src = 'https://test.taggbox.com/img/author2.png' }

  classSwap = (person) => {

    var one = "modalId265836962 cstmModalPopup taggModalShow fade modal-only-text webModalPopup themeModal19 in"
    var two = "modalId265836962 cstmModalPopup taggModalShow fade modal-text-image webModalPopup themeModal19 in"
    var three = "modalId265836962 cstmModalPopup taggModalShow fade modal-only-image webModalPopup themeModal4 in"

    if (person.mediaUrl === "" && person.file === "") {

      return one;
    }

    else if (person.mediaUrl === "" && person.file !== "" && person.content === "") {
      return three;
    }
    else {

      return two;
    }
  }


  showMore() {

  
    this.setState({

      button: !this.state.button

    }, () => {
        var p = this.state.newApi.wall.ThemeRule.numberOfPosts;

        axios.get(`https://test.taggbox.com/post/append/${this.state.wid}/${this.state.tstamp}/${p}/${this.state.netId}`)

          .then(res => {

            var pb = this.state.counter;
            pb = pb + p;

            var people = Object.keys(res.data.data).map(p => res.data.data[p])
            this.setState({ people });

            var peoples = this.state.filteredPersons.concat(people);

            if (this.state.filteredPersons.length !== 0 && people.length !== 0) {

              if (people.length < this.state.newApi.wall.ThemeRule.numberOfPosts) {
                this.setState({ counter: pb, filteredPersons: peoples, button: false, buttonName: 'No More Posts' });
              }

              else {
                this.setState({ counter: pb, filteredPersons: peoples, button: false });
              }

            }

            else if (this.state.filteredPersons.length !== 0 && people.length === 0) {


              if (this.state.newApi.wall.Personalization.w_language === "French") {
                this.setState({ buttonName: "Pas plus de messages" });
              }
              else if (this.state.newApi.wall.Personalization.w_language === "German") {
                this.setState({ buttonName: "Keine weiteren Beiträge" });
              }

              else if (this.state.newApi.wall.Personalization.w_language === "Malay") {
                this.setState({ buttonName: "Tidak ada lagi" });
              }
              else if (this.state.newApi.wall.Personalization.w_language === "Dutch") {
                this.setState({ buttonName: "Geen berichten meer" });
              }
              else if (this.state.newApi.wall.Personalization.w_language === "Spanish") {
                this.setState({ buttonName: "No más publicaciones" });
              }
              else if (this.state.newApi.wall.Personalization.w_language === "Chinese") {
                this.setState({ buttonName: "没有更多的帖子" });
              }
              else if (this.state.newApi.wall.Personalization.w_language === "Korean") {
                this.setState({ buttonName: "더 이상 게시물 없음" });
              }
              else if (this.state.newApi.wall.Personalization.w_language === "Italian") {
                this.setState({ buttonName: "Nessun altro messaggio" });
              }
              else if (this.state.newApi.wall.Personalization.w_language === "Portuguese") {
                this.setState({ buttonName: "Mais mensagens" });
              }

              else if (this.state.newApi.wall.Personalization.w_language === "English" || this.state.newApi.wall.Personalization.w_language === null) {
                this.setState({ buttonName: "No More Posts" });
              }

              else if (this.state.newApi.wall.Personalization.w_language === "custom") {
                this.setState({ buttonName: this.state.cLanguage.no_more });
              }


              this.setState({ counter: pb, filteredPersons: peoples, button: false });

            }

            else {

              this.setState({ counter: pb, filteredPersons: peoples, buttonName: "No Posts" })
              return (<div>

                <button id="appendBtn" className="loadMoreBtn ladda-button" data-style="zoom-in" data-spinner-color="#1f1b1b" style={{ marginBottom: 20, display: 'inline', backgroundColor: this.state.shmorBack, border: this.state.shmorFont, color: this.state.shmorFont }}>No More Posts</button>
              </div>)
            }

            // this.bindEvents(window.document.body.offsetHeight)
          }
          )
      });

    

  }


  openModal = () => {

    this.setState({ modalIsOpen: true });

    document.body.style.overflow = this.state.isMobile === true ? "auto" : "hidden"

  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    document.body.style.overflow = "auto"
  }

  videoImageCheck = (person) => {

      if ((person.type === 2) || (person.type === 4)) {
    
      return (

        <div className="taggImageHolder taggContentHolderN3 blur-bg" style={{ backgroundImage: 'url(' + person.filename + ')' }} >

          <img className="img-responsive" src={person.filename} alt=""  />

        </div>
      )
    }

      else if (person.type === 1) {

      return (
        <div className="taggImageHolder taggContentHolderN3 blur-bg" ></div>
      )
    }

      else if ((person.type === 3) || (person.type === 5)) {

      if (person.link.indexOf("youtube") >= 0 || person.link.indexOf("youtu.be") >= 0  ){
       
        var yLink = person.mediaUrl.concat("&mute=1")
      
        return (<Iframe className="taggImageHolder taggContentHolderN3 blur-bg" url={yLink} allowFullScreen="true" 
        style={{ backgroundImage: 'url(' + person.filename + ')' }}
        >
        </Iframe>
        )
      }

      else if (person.link.indexOf("vimeo") >= 0) {
        var yLink = person.mediaUrl.concat("&mute=1");
        return (
          <Vimeo className="taggImageHolder taggContentHolderN3 blur-bg" 
            video={yLink}
            autoplay
          />
        )

      }

      else if(person.network.name === "Tumblr") {	
        var tLink = person.mediaUrl.concat("&mute=1")	
      
        return (<Iframe className="taggImageHolder taggContentHolderN3 blur-bg" url={tLink} allowFullScreen="true">	
        </Iframe>	
        )	
      }

      else {
       
        return (<video className="taggImageHolder taggContentHolderN3 blur-bg" src={person.mediaUrl} autoPlay muted></video>)
      }

    }
  }

  socialIcons = (activeCardId) => {
    if (activeCardId.network.name !== "Twitter") {
      return (
        <div >

          <a href={activeCardId.share.facebook} className="fbPanel" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
          <a href={activeCardId.share.twitter} className="twPanel" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href={activeCardId.share.linkedin} className="linkedinPanel" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>

        </div>
      )
    } else {
      return (
        <div>
          <a href={activeCardId.share.twitter} className="twPanel" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href={activeCardId.share.linkedin} className="linkedinPanel" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>

        </div>
      )
    }
  }

  shareWrapperTheme49 = (person) => {

    if (person.network.name !== "Twitter") {
      return (
        <div >

          <a href={person.share.facebook} className="fbShare socialIcon_foot" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook icon facebook_icon">
              <FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
          <a href={person.share.twitter} className="twShare socialIcon_foot" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter twitter_icon">
              <FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
          <a href={person.share.linkedin} className="liShare socialIcon_foot" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin linkedin_icon">
              <FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>

        </div>
      )
    } else {

      return (
        <div>

          <a href={person.share.twitter} className="twShare socialIcon_foot" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter twitter_icon">
              <FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
          <a href={person.share.linkedin} className="liShare socialIcon_foot" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin linkedin_icon">
              <FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>

        </div>
      )
    }

  }

  nextModal = (activeCardId, key) => {
    key = key + 1;
    this.setState({
      key, activeCardId
    })

  }

  toggleCard = (activeCardId, filteredPersons) => {

    this.setState({ animationRight: 0 })
    if (activeCardId === -1) {
      this.setState({ activeCardId: this.state.filteredPersons.length - 1 });
    }

    else if (this.state.filteredPersons.length - 1 === activeCardId) {
   
      this.setState({ activeCardId: this.state.filteredPersons.length - 1 });
    }

    else if (this.state.filteredPersons.length - 1 < activeCardId) {
     
      this.setState({ activeCardId: 0 });
    }

    else {
      this.setState({
        activeCardId
      });

    }
  }


  networkIconModal = (activeCardId) => {
    if (activeCardId.network.icon !== null) {
      var f = activeCardId.network.icon.substring(3);

      if(activeCardId.network.name !== 'RSS'){

        if(activeCardId.network.name !== 'Workplace' && activeCardId.network.name !== 'SMS'){
      return (

        <span className="fa fa-facebook" style={{ color: activeCardId.network.color }}>
          <FontAwesomeIcon size="2x" icon={['fab', f === 'facebook' ? 'facebook-f': f]} /></span>

      )}

      else if(activeCardId.network.name === 'SMS'){
        return(
        <span className="fa fa-facebook" style={{ color: activeCardId.network.color }}>
           {/* <FontAwesomeIcon size="2x" icon={['far', 'envelope']} ></FontAwesomeIcon></span> */}
           <FontAwesomeIcon size="2x" icon={['far', 'envelope' ]} /></span>
         ) }

      else if(activeCardId.network.name === 'Workplace'){
        return(

          <i class="fa icon-taggbox-workplace-2"></i>
        )
      }
    
    
    
    
    }

      else{
        return (

          <span className="fa fa-facebook" style={{ color: activeCardId.network.color }}>
            <FontAwesomeIcon size="2x" icon={['fas', 'rss']} /></span>
  
        )

}

    } else {
      return null;


    }
  }



  socialActions = (filteredPersons,actionId) => {

    if (filteredPersons.socialAction === true) {

      if (filteredPersons.network.description === "twitter") {

        var reply = "https://twitter.com/intent/tweet?in_reply_to=" + filteredPersons.postId;
        var retweet = "https://twitter.com/intent/retweet?tweet_id=" + filteredPersons.postId;
        var favourite = "https://twitter.com/intent/favorite?tweet_id=" + filteredPersons.postId;

        return (
          <div className="_socialAction"
         
            style={{ color: filteredPersons.font.iconColor }}  >

            <span>
              <a href={reply} onMouseEnter={'enter'} onMouseLeave={'leave'} className="fa fa-share-square-o tooltips" title="Reply" target="_blank" rel="noopener noreferrer" ></a>
            </span>
            <span> <a href={retweet} className="fa fa-retweet tooltips" title="Retweet" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon="retweet" />
            </a></span>
            <span> <a href={favourite} className="fa fa-heart-o tooltips" title=" Favorite " target="_blank" rel="noopener noreferrer">
            </a></span>

            <div className="clear"></div>

          </div>

        )

      }

      else if ((filteredPersons.network.description === "facebook" || "instagrambusiness" || "youtube" || "vimeo" || "workplace") && filteredPersons.network.description !== "") {

        return (
          <div className="_socialAction" style={{ color: filteredPersons.font.iconColor }} >

            <span><a href={filteredPersons.link} className="fa fa-thumbs-o-up tooltips" title="like" target="_blank" rel="noopener noreferrer"></a> </span>
            <span><a href={filteredPersons.link} className="fa fa-comment-o tooltips" title="comment" target="_blank" rel="noopener noreferrer"></a></span>

            <div className="clear"></div>

          </div>

        )
      }


    }

  }

  
  networkCard = (person) => {

   
    if (person.network.icon !== null)  {
      var a = person.network.icon;
      var netwrk = a.substring(3);
     if(person.network.name !== "RSS"){

     if(person.network.name !== "Workplace" && person.network.name !== "SMS"){
   
// not rss and not workplace 
      return (
        <div className="postNetwork" style={{ color: person.font.iconColor }} data-network={person.network.name}  >

          <i className={`fa fa-${netwrk}`}>
            
          <FontAwesomeIcon  icon={['fab', netwrk === 'facebook' ? 'facebook-f' : netwrk]} />
          {/* <FontAwesomeIcon  icon={['fas', 'rss']} /> */}
          </i>
        </div>
      )}


      else if(person.network.name === "Workplace"){
   //  workplace     
        return(
        <div className="postNetwork" style={{ color: person.font.iconColor }} data-network={person.network.name}  >
          <i className="fa icon-taggbox-workplace-2"></i>
          </div>)
      }
    
     else if (person.network.name === "SMS") {
       return (
         <div className="postNetwork" style={{ color: person.font.iconColor }} data-network={person.network.name}  >
           <i className="fa fa-envelope-o">
             <FontAwesomeIcon icon={['far', 'envelope']}></FontAwesomeIcon>

           </i>
         </div>
      )
    }
    
    
    
    }

      else{
        return (
          <div className="postNetwork" style={{ color: person.font.iconColor }} data-network={person.network.name}  >
            <i className={`fa fa-${netwrk}`}>
              
            <FontAwesomeIcon  icon={['fas', 'rss']} />
            </i>
          </div>)



      }
    
    
    
    }

    
     
    
    else {

      return null;
    }
 

  }

  viewonFun = (filteredPersons) => {

    if (filteredPersons.network.name === "SMS" || filteredPersons.network.name === "Whatsapp" || filteredPersons.network.icon === null || filteredPersons.link === null || filteredPersons.network.name === null) {
      return null
    }
    else {
      return (
        <a className={`popupSocialButton ${filteredPersons.network.description}`} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHoverLeave} href={filteredPersons.link} target="_blank" rel="noopener noreferrer" style={{backgroundColor: this.state.hover === true ? 'black' : ''  }} > <i className="fa fa-facebook" /><div style={{color : this.state.hover === true ? this.state.shmorBack : ''}}>{this.state.viewOnText} {filteredPersons.network.name !== "Vimeo" ? filteredPersons.network.icon.substring(3) : filteredPersons.network.name}</div> </a>
      )
    }

  }
  

  actionCTA = (filteredPersons) => {

    if (this.state.newApi.wall.Personalization.theme !== 16) {

      if (filteredPersons.cta === "") {

        return null;
      }

      else {

        return (
          <div className="cardCTA" onClick={(event) => event.stopPropagation()}>
            <a style={{ color: filteredPersons.personalization.ctaTextColor, backgroundColor: filteredPersons.personalization.ctaButtonColor }} target="_blank" rel="noopener noreferrer" href={filteredPersons.personalization.buttonUrl}> {filteredPersons.personalization.buttonText}</a>
          </div>
        );
      }
    } else {
      return null;
    }

  }

  authorDetails = (filteredPersons) => {

    if (filteredPersons.personalization.postAuthor === 1 && filteredPersons.personalization.postTime === 1) {

      return (

        <div className="authorDetails" border-radius="50%">

          <img
            src={filteredPersons.author.picture}
            onError={this.addDefaultSrc}
            alt=""

          />

          <div className="postAuthorName" style={{ color: filteredPersons.font.authorColor }} >{filteredPersons.author.name.substring(0, 30)}</div>

          <div className="authrHandleTime">
            <span className="authrHandle" target="_blank" style={{ color: filteredPersons.font.authorColor }} > @{filteredPersons.author.username} </span>
            <span className="sepratedot" style={{ color: filteredPersons.font.authorColor }} > <FontAwesomeIcon size="1x" icon="circle" /> </span>
            <span className="timePost" style={{ color: filteredPersons.font.authorColor }} >{moment(new Date(filteredPersons.createdAt * 1000)).fromNow()}</span>
            <div className="clearfix"></div>

          </div>

        </div>

      )
    }

    else if (filteredPersons.personalization.postAuthor === 1 && filteredPersons.personalization.postTime !== 1) {

      return (
        <div className="authorDetails" border-radius="50%">

          <img
            src={filteredPersons.author.picture}
            onError={this.addDefaultSrc}
            alt=""

          />

          <div className="postAuthorName" style={{ color: filteredPersons.font.authorColor }} >{filteredPersons.author.name}</div>

          <div className="authrHandleTime">
            <span className="authrHandle" target="_blank" style={{ color: filteredPersons.font.authorColor }} > @{filteredPersons.author.username} </span>
            <span className="sepratedot" style={{ display: "none" }} > <FontAwesomeIcon size="1x" icon="circle" color="black" /> </span>
            <span className="timePost" style={{ display: "none" }} >{moment(new Date(filteredPersons.createdAt * 1000)).fromNow()}</span>
            <div className="clearfix"></div>

          </div>

        </div>

      )
    }

    else if (filteredPersons.personalization.postAuthor !== 1 && filteredPersons.personalization.postTime === 1) {
     return (
        <div className="authrHandleTime">
          <span className="authrHandle" target="_blank" style={{ display: "none" }} > @{filteredPersons.author.username} </span>
          <span className="sepratedot" style={{ display: "none" }} > <FontAwesomeIcon size="1x" icon="circle" color="black" /> </span>
          <span className="timePost" style={{ color: filteredPersons.font.authorColor }} >{moment(new Date(filteredPersons.createdAt * 1000)).fromNow()}</span>
          <div className="clearfix"></div>

        </div>

      )
    }

    else {
      return (
        <div className="authrHandleTime">
          <span className="authrHandle" target="_blank" style={{ display: "none" }} > @{filteredPersons.author.username} </span>
          <span className="sepratedot" style={{ display: "none" }} > <FontAwesomeIcon size="1x" icon="circle" color="black" /> </span>
          <span className="timePost" style={{ display: "none" }} >{moment(new Date(filteredPersons.createdAt * 1000)).fromNow()}</span>
          <div className="clearfix"></div>
        </div>
      )
    }

  }


  shareOptions = (filteredPersons) => {

    if (filteredPersons.share.status === 1 && filteredPersons.network.name !== "Twitter") {
      return (
        <div className="share_wrapper" >
          <a className="share_icon" href={filteredPersons.share.facebook}><FontAwesomeIcon size="1x" style={{ color: 'black', backgroundColor: 'white', borderRadius: '50%', width: '20px', height: '30px', padding: '2px', textAlign: 'center' }} icon="share" /></a>

          <ul>
            <li><a href={filteredPersons.share.facebook}><FontAwesomeIcon icon={['fab', 'facebook']} style={{ backgroundColor: 'white', borderRadius: '50%', width: '20px', height: '30px', padding: '2px' }} color="#3b5998" /></a></li>
            <li><a href={filteredPersons.share.twitter}><FontAwesomeIcon size="1x" icon={['fab', 'twitter']} style={{ backgroundColor: 'white', borderRadius: '50%', width: '20px', height: '30px', padding: '2px' }} color="#55acee" /></a></li>
            <li><a href={filteredPersons.share.linkedin}><FontAwesomeIcon size="1x" icon={['fab', 'linkedin']} style={{ backgroundColor: 'white', borderRadius: '50%', width: '20px', height: '30px', padding: '2px' }} color="#0177b5" /></a></li>
          </ul>


        </div>
      )
    }

    else if (filteredPersons.share.status === 1 && filteredPersons.network.name === "Twitter") {
      return (
        <div className="share_wrapper" >
          <a className="share_icon" href={filteredPersons.share.facebook}><FontAwesomeIcon size="1x" style={{ color: 'black', backgroundColor: 'white', borderRadius: '50%', width: '20px', height: '30px', padding: '2px', textAlign: 'center' }} icon="share" /></a>

          <ul>
            <li><a href={filteredPersons.share.twitter}><FontAwesomeIcon size="1x" icon={['fab', 'twitter']} style={{ backgroundColor: 'white', borderRadius: '50%', width: '20px', height: '30px', padding: '2px' }} color="#55acee" /></a></li>
            <li><a href={filteredPersons.share.linkedin}><FontAwesomeIcon size="1x" icon={['fab', 'linkedin']} style={{ backgroundColor: 'white', borderRadius: '50%', width: '20px', height: '30px', padding: '2px' }} color="#0177b5" /></a></li>
          </ul>
        </div>

      )
    }

    else {
      return null;

    }


  }


  
  fontFam = (filteredPersons) => {

    var cardNo = (this.state.width - 4) / (this.state.postWidth )
    var rowC = Math.trunc(cardNo)
    var space = (this.state.width - 4) % this.state.postWidth 
    var adjustS = space / rowC;
    
    if (cardNo >= 1) {
      var adjustW = this.state.postWidth + adjustS;
     

    }
    else {
      var adjustW = this.state.postWidth - adjustS;
     
    }
 
      var rndm = adjustW > this.state.postWidth ? adjustW / 8 : this.state.width / 8;
      
     var randm = Math.trunc(rndm)
    

    if (this.state.newApi.wall.Personalization.theme !== 3 && this.state.newApi.wall.Personalization.theme !== 20) {
      var fam = filteredPersons.font.font;

      if (filteredPersons.personalization.hashtag_highlight === 1) {

        if (filteredPersons.personalization.hashtag_feed === 0 && filteredPersons.personalization.hashtag_all === 0) {
         
          return (
            <div className={`postedTxt ${filteredPersons.personalization.textDecorate === 1 && filteredPersons.theme48.class1 === "onlyTextCard" ? 'decorateTxt' : '' } setFont font${fam}`} style={{ fontSize: filteredPersons.font.fontsize, color: filteredPersons.font.fontColor }} >
              <h1>{filteredPersons.contentTitle}</h1>
              <p className="chtrLimits emojiApplied" >
              <span className="leftquote" style={{display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none"}}> <FontAwesomeIcon icon="quote-left"></FontAwesomeIcon> </span>
              {
               (this.state.newApi.wall.Personalization.theme === 4 || this.state.newApi.wall.Personalization.theme === 16 ) && filteredPersons.content.length !== 0 && filteredPersons.content[randm] !== undefined ?
              (filteredPersons.content.substring(0,adjustW > this.state.postWidth ? adjustW/8 : this.state.width/8)).concat('...') 

              :filteredPersons.content
              }

              <span className="rightquote" style={{display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none"}} >  <FontAwesomeIcon icon="quote-right"></FontAwesomeIcon></span>
              </p>
            </div>
          )
        }

        else if ((filteredPersons.personalization.hashtag_feed === 0 && filteredPersons.personalization.hashtag_all === 1) || (filteredPersons.personalization.hashtag_feed === 1 && filteredPersons.personalization.hashtag_all === 1)) {
         
          return (
            <div className={`postedTxt ${filteredPersons.personalization.textDecorate === 1 && filteredPersons.theme48.class1 === "onlyTextCard" ? 'decorateTxt' : '' } setFont font${fam}`} style={{ fontSize: filteredPersons.font.fontsize, color: filteredPersons.font.fontColor }} >
                  <h1>{filteredPersons.contentTitle}</h1>
              <p className="chtrLimits emojiApplied" >
              
              <span className="leftquote" style={{display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none"}}> <FontAwesomeIcon icon="quote-left"></FontAwesomeIcon> </span>

                {
                  (this.state.newApi.wall.Personalization.theme === 4 || this.state.newApi.wall.Personalization.theme === 16 ) && filteredPersons.content.length !== 0 && filteredPersons.content[randm] === undefined ?

                  reactStringReplace(filteredPersons.content.substring(0,adjustW > this.state.postWidth ? adjustW/8 : this.state.width/8), /#(\w+)/g, (match, i) => (
                  <span key={match + i} style={{ color: filteredPersons.personalization.hashtag_color, fontWeight: "bold" }}>#{match}</span>

                ))

                :
                (this.state.newApi.wall.Personalization.theme === 4 || this.state.newApi.wall.Personalization.theme === 16 ) &&  filteredPersons.content.length !== 0 && filteredPersons.content[randm] !== undefined ?

                reactStringReplace(filteredPersons.content.substring(0,adjustW > this.state.postWidth ? adjustW/8 : this.state.width/8), /#(\w+)/g, (match, i) => (
                  <span key={match + i} style={{ color: filteredPersons.personalization.hashtag_color, fontWeight: "bold" }}>#{match}</span>
                )).concat('...')

               
                      // reactStringReplace(filteredPersons.content.substring(0, adjustW > this.state.postWidth ? adjustW / 8 : this.state.width / 8).
                      //   replace(/(^|\s)(#[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\d-_.]+)/ig,
                      //     (match, i) => (
                      //       <span key={match + i} style={{ color: filteredPersons.personalization.hashtag_color, fontWeight: "bold" }}>#{match}</span>
                      //     ))
  
              //  (match, i) => (<span key={match + i} style={{ color: filteredPersons.personalization.hashtag_color, fontWeight: "bold" }}>#{match}</span> 
  
 
                :

                reactStringReplace(filteredPersons.content, /#(\w+)/g, (match, i) => (
                  <span key={match + i} style={{ color: filteredPersons.personalization.hashtag_color, fontWeight: "bold" }}>#{match}</span>
                ))
                
                }

                 <span className="rightquote" style={{display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none"}}> <FontAwesomeIcon icon="quote-right"></FontAwesomeIcon> </span>


              </p>

            </div>
          )
        }

      else if (filteredPersons.personalization.hashtag_feed === 1 && filteredPersons.personalization.hashtag_all === 0) {
 
      return (
      <div className={`postedTxt ${filteredPersons.personalization.textDecorate === 1 && filteredPersons.theme48.class1 === "onlyTextCard" ? 'decorateTxt' : '' } setFont font${fam}`} style={{ fontSize: filteredPersons.font.fontsize, color: filteredPersons.font.fontColor }} >
     <h1>{filteredPersons.contentTitle}</h1>
      <p className="chtrLimits emojiApplied" >

      <span className="leftquote" style={{display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none"}} ><FontAwesomeIcon icon="quote-left"></FontAwesomeIcon></span>

      {
                  (this.state.newApi.wall.Personalization.theme === 4 || this.state.newApi.wall.Personalization.theme === 16) && filteredPersons.content.length !== 0 && filteredPersons.content[randm] !== undefined?

            reactStringReplace(filteredPersons.content.substring(0,adjustW > this.state.postWidth ? adjustW/8 : this.state.width/8), filteredPersons.hash.hashString, (match, i) => (
              <span className="gridhashtag" style={{ color: filteredPersons.personalization.hashtag_color, fontWeight: "bold" }}>{match}</span>
            )).concat('...')

            :
            (this.state.newApi.wall.Personalization.theme === 4 || this.state.newApi.wall.Personalization.theme === 16) && filteredPersons.content.length !== 0 && filteredPersons.content[randm] === undefined?

            reactStringReplace(filteredPersons.content.substring(0,adjustW > this.state.postWidth ? adjustW/8 : this.state.width/8), filteredPersons.hash.hashString, (match, i) => (
              <span className="gridhashtag" style={{ color: filteredPersons.personalization.hashtag_color, fontWeight: "bold" }}>{match}</span>
            ))

            :

            reactStringReplace(filteredPersons.content, filteredPersons.hash.hashString, (match, i) => (
              <span className="gridhashtag" style={{ color: filteredPersons.personalization.hashtag_color, fontWeight: "bold" }}>{match}</span>
            ))
      }

       <span className="rightquote" style={{display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none"}}> <FontAwesomeIcon icon="quote-right"></FontAwesomeIcon> </span> 

      </p> 
      </div>


      )
      }


    } else {
      return (
        <div className={`postedTxt ${filteredPersons.personalization.textDecorate === 1 && filteredPersons.theme48.class1 === "onlyTextCard" ? 'decorateTxt' : '' } setFont font${fam}`} style={{ fontSize: filteredPersons.font.fontsize, color: filteredPersons.font.fontColor }} >
                <h1>{filteredPersons.contentTitle}</h1>


          <p className="chtrLimits emojiApplied" >

         <span className="leftquote" style={{display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none"}}><FontAwesomeIcon icon="quote-left"></FontAwesomeIcon> </span>
        
    
            {
              (this.state.newApi.wall.Personalization.theme === 4 || this.state.newApi.wall.Personalization.theme === 16 )&& filteredPersons.content.length !== 0 && filteredPersons.content[randm] !== undefined ?
                (filteredPersons.content.substring(0, adjustW > this.state.postWidth ? adjustW / 8 : this.state.width / 8)).concat('...') 
                
              
                
                
                :filteredPersons.content
            }
        
         <span className="rightquote" style={{display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none"}}> <FontAwesomeIcon icon="quote-right"></FontAwesomeIcon> </span>
         </p>
        </div>
      )
    }

  }else{
    return null
  }
  }


  fontFamUpper = (filteredPersons) => {

    if (this.state.newApi.wall.Personalization.theme === 20) {
      var fam = filteredPersons.font.font;

      if (filteredPersons.personalization.hashtag_highlight === 1) {

        if (filteredPersons.personalization.hashtag_feed === 0 && filteredPersons.personalization.hashtag_all === 0) {
          return (
            <div className={`postedTxt ${filteredPersons.personalization.textDecorate === 1 ? 'decorateTxt' : ''} setFont font${fam}`} style={{ fontSize: filteredPersons.font.fontsize, color: filteredPersons.font.fontColor }} >
              <p className="emojiApplied" >
                <span className="leftquote" style={{ display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none" }}> <FontAwesomeIcon icon="quote-left"></FontAwesomeIcon> </span>
                {filteredPersons.content}
                <span className="rightquote" style={{ display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none" }}><FontAwesomeIcon icon="quote-right"></FontAwesomeIcon> </span>
              </p>
            </div>
          )
        }

        else if ((filteredPersons.personalization.hashtag_feed === 0 && filteredPersons.personalization.hashtag_all === 1) || (filteredPersons.personalization.hashtag_feed === 1 && filteredPersons.personalization.hashtag_all === 1)) {

          return (
            <div className={`postedTxt ${filteredPersons.personalization.textDecorate === 1 ? 'decorateTxt' : ''} setFont font${fam}`} style={{ fontSize: filteredPersons.font.fontsize, color: filteredPersons.font.fontColor }} >

              <p className="emojiApplied" >

                <span className="leftquote" style={{ display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none" }} > <FontAwesomeIcon icon="quote-left"></FontAwesomeIcon> </span>
                {reactStringReplace(filteredPersons.content, /#(\w+)/g, (match, i) => (
                  <span key={match + i} style={{ color: filteredPersons.personalization.hashtag_color, fontWeight: "bold" }}>#{match}</span>
                ))}
                <span className="rightquote" style={{ display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none" }} > <FontAwesomeIcon icon="quote-right"></FontAwesomeIcon></span>

              </p>

            </div>
          )
        }

        else if (filteredPersons.personalization.hashtag_feed === 1 && filteredPersons.personalization.hashtag_all === 0) {

          return (
            <div className={`postedTxt ${filteredPersons.personalization.textDecorate === 1 ? 'decorateTxt' : ''} setFont font${fam}`} style={{ fontSize: filteredPersons.font.fontsize, color: filteredPersons.font.fontColor }} >

              <p className="emojiApplied" >

                <span className="leftquote" style={{ display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none" }} >  <FontAwesomeIcon icon="quote-left"></FontAwesomeIcon> </span>

                {reactStringReplace(filteredPersons.content, filteredPersons.hash.hashString, (match, i) => (
                  <span className="gridhashtag" style={{ color: filteredPersons.personalization.hashtag_color, fontWeight: "bold" }}>{match}</span>
                ))}

                <span className="rightquote" style={{ display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none" }} >  <FontAwesomeIcon icon="quote-right"></FontAwesomeIcon> </span>

              </p>
            </div>


          )
        }


      } else {
        return (
          <div className={`postedTxt ${filteredPersons.personalization.textDecorate === 1 ? 'decorateTxt' : ''} setFont font${fam}`} style={{ fontSize: filteredPersons.font.fontsize, color: filteredPersons.font.fontColor }} >

            <p className="emojiApplied" >
              <span className="leftquote" style={{ display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none" }} >  <FontAwesomeIcon icon="quote-left"></FontAwesomeIcon>  </span>
              {filteredPersons.content}
              <span className="rightquote" style={{ display: filteredPersons.theme48.class1 === "onlyTextCard" && filteredPersons.personalization.textDecorate === 1 ? "inline" : "none" }} ><FontAwesomeIcon icon="quote-right"></FontAwesomeIcon> </span>
            </p>

          </div>
        )
      }

    } else {
      return null
    }
  }

  fontFamModal = (person) => {

    var fam_one = person.font.font
    var trimContent = Math.trunc(this.state.width / 5)
    return (

      <div className={`setFont ${person.personalization.textDecorate === 1 && person.theme48.class1 === "onlyTextCard" ? 'decorateTxt' : ''} font${fam_one}`}

        style={{
          color:
            this.state.newApi.wall.Personalization.theme === 4 && person.font.fontColor === "#ffffff" ? "black"
              : this.state.newApi.wall.Personalization.theme === 16 && person.font.fontColor === "#ffffff" ? "black"
                : person.font.fontColor
        }}>

        <h1>{person.contentTitle}</h1>

        <p className="chtrLimits emojiApplied">
          <span className="leftquoteModal" style={{ display: person.theme48.class1 === "onlyTextCard" && person.personalization.textDecorate === 1 ? "inline" : "none", }}> <FontAwesomeIcon icon="quote-left"></FontAwesomeIcon> </span>

          {person.personalization.hashtag_highlight === 1 && person.personalization.hashtag_feed === 0 && person.personalization.hashtag_all === 0 ?

            person.fullcontent.substring(0, trimContent).concat(person.fullcontent.length !== 0 && person.fullcontent.length < trimContent ? ''
              : person.fullcontent.length === 0 ? ''
                : '...')

            : person.personalization.hashtag_highlight === 1 && person.personalization.hashtag_feed === 0 && person.personalization.hashtag_all === 1 ?

              reactStringReplace(person.fullcontent.substring(0, trimContent).concat(person.fullcontent.length !== 0 && person.fullcontent.length < trimContent ? ''
                : person.fullcontent.length === 0 ? ''
                  : '...'), /#(\w+)/g, (match, i) => (
                    <span className="gridhashtag" style={{ color: person.personalization.hashtag_color, fontWeight: "bold" }}>#{match}</span>
                  ))

              : person.personalization.hashtag_highlight === 1 && person.personalization.hashtag_feed === 1 && person.personalization.hashtag_all === 0 ?

                reactStringReplace(person.fullcontent.substring(0, trimContent).concat(person.fullcontent.length !== 0 && person.fullcontent.length < trimContent ? ''
                  : person.fullcontent.length === 0 ? ''
                    : '...'), person.hash.hashString, (match, i) => (
                      <span className="gridhashtag" style={{ color: person.personalization.hashtag_color, fontWeight: "bold" }}>{match}</span>
                    ))

                : person.personalization.hashtag_highlight === 1 && person.personalization.hashtag_feed === 1 && person.personalization.hashtag_all === 1 ?

                  reactStringReplace(person.fullcontent.substring(0, trimContent).concat(person.fullcontent.length !== 0 && person.fullcontent.length < trimContent ? ''
                    : person.fullcontent.length === 0 ? ''
                      : '...'), /#(\w+)/g, (match, i) => (
                        <span className="gridhashtag" style={{ color: person.personalization.hashtag_color, fontWeight: "bold" }}>#{match}</span>
                      ))

                  : person.fullcontent.substring(0, trimContent).concat(person.fullcontent.length !== 0 && person.fullcontent.length < trimContent ? ''
                    : person.fullcontent.length === 0 ? ''
                      : '...')

          }

          <span className="rightquoteModal" style={{ display: person.theme48.class1 === "onlyTextCard" && person.personalization.textDecorate === 1 ? "inline" : "none" }}> <FontAwesomeIcon icon="quote-right"></FontAwesomeIcon> </span>
        </p>
      </div>

    )
  }

  handleKeyPress = (e, filteredPersons) => {

    if (window.event.keyCode === 27) {
      this.setState({ activeCardId: null });
      this.closeModal()
    }

    if (filteredPersons.personalization.popupSlideShow === 1) {

      if (window.event.keyCode === 39) {

        this.toggleCard(this.state.activeCardId + 1)
      }

      else if (window.event.keyCode === 37) {

        this.toggleCard(this.state.activeCardId - 1)
      }
    } else {
      return null
    }
  }

  popupSlider = (filteredPersons) => {

    if (filteredPersons.personalization.popupSlideShow === 1) {
      return (
        <>
          <div className="slideBtn next-btn" onClick={() => this.toggleCard(this.state.activeCardId + 1)} > </div>
         
          <div className="slideBtn pre-btn" onClick={() => this.toggleCard(this.state.activeCardId - 1)}></div>
        </>
      )
    } else {
      return null;
    }


  }

  taggShopFun = () => {
    const { activeCardId } = this.state;

    var life = this.state.filteredPersons[activeCardId];

    var p = life["ugcPersonalizaion"]["UgcSetting"];

    var isMyObjectEmpty = !Object.keys(life["UgcProduct"]).length;

    var isMyObjectEmptyOne = !Object.keys(life["ugcPersonalizaion"]).length;

    if (isMyObjectEmpty === false && isMyObjectEmptyOne === false) {

      var settingsSlider = {
        dots: false,
        nav: true,
        centerPadding: 60,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
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

      var t = Object.keys(life["UgcProduct"]).map(k => life["UgcProduct"][k]);

      return (
        <>
          <div className="ugc-module">
            <h2 className={`font${p["buy_font_family"]}`} style={{ fontSize: p["feature_font_size"], color: p["feature_text_color"] }}>{p["feature_text"]}</h2>
            <Slider {...settingsSlider}>
              {t.map((tz) => {

                var im = tz["UgcProduct"]["product_image"];
                var om = tz["UgcProduct"]["product_url"]

                return (
                  <div className="product_slides">
                    <div className="itemMargin">

                      <div className="ugc-product-image"
                        style={{ backgroundImage: 'url(' + im + ')' }}
                      >

                      </div>

                      <div className="ugc-product-title font" style={{ color: p["product_title_color"], fontSize: p["product_title_font_size"] }}>{tz["UgcProduct"]["product_title"]}</div>

                      <div className="ugc-product-price">
                        <div className="mainPrice font4" style={{ color: p["original_price_color"], fontSize: p["original_price_font_size"] }}>
                          <span className="mrp" style={{ textDecoration: tz["UgcProduct"]["product_discount"] === 0 ? 'none' : 'line-through' }}>{tz["UgcProduct"]["price_currency_symbol"]}{tz["UgcProduct"]["product_price"]}</span>
                        </div>

                        <div className="omg" style={{ display: tz["UgcProduct"]["product_discount"] === 0 ? 'none' : 'block' }}>
                          <div className="discountPrice font4" style={{ color: p["discount_price_color"], fontSize: p["discount_price_font_size"] }}>
                            <span className="">{tz["UgcProduct"]["price_currency_symbol"]}{tz["UgcProduct"]["product_discount"]}</span>
                          </div>
                        </div>

                      </div>

                      <div className="clear"></div>

                      <div className="ugc-product-link">
                        <a href={om} className="btn btn-sm font4" style={{ color: p["buy_now_color"], backgroundColor: p["buy_now_background"], fontSize: p["buy_font_size"] }} target="_blank">{p["buy_now_text"]}</a>
                        <div className="clear"></div>
                      </div>

                      <div className="clear"></div>



                    </div>
                  </div>


                )
              })}
            </Slider>
          </div>
        </>
      )

    } else {
      return null;
    }

  }

  PopupOnOff = (filteredPersons) => {
     return null
    }

  hello = () => {
    var m = "backgroundImage: 'url(' +this.state.finalPath +')', backgroundColor: this.state.bakcolor, backgroundRepeat: 'repeat', backgroundSize: 'contain', overflow: 'hidden', outline: 'none' ";
    if (this.state.newApi.wall.Personalization.cssStatus === 1) {
      return m;

    } else {
      return null;
    }
  };

  bannerImageLogic = () => {

    if (this.state.newApi.wall.BannerImage.status === 1) {

      return (
        <div id="wBannerImage" className="bannerTop">

          <img src={this.state.finalBannerPath} className="img-responsive"></img>

        </div>
      )
    } else {
      return null;
    }
  }


  bannerFun = () => {

    var customServerPath = "https://taggbox.s3.amazonaws.com/";
    var customUploadPath = this.state.newApi.wall.CustomBannerImage.path;
    var customDomainPath = customServerPath.concat(customUploadPath);

    var customImagePath = this.state.newApi.wall.CustomBannerImage.newName;

    var extensionPath = this.state.newApi.wall.LogoImage.extension;
    var customFinalPath = customDomainPath.concat(customImagePath).concat(extensionPath);

    var defaultFinalPath = "https://app.taggbox.com/uploaded/8661481540843.08240.jpg"

    var ex = customServerPath.concat(this.state.newApi.wall.LogoImage.path);
    var customLogoPath = this.state.newApi.wall.LogoImage.newName;

    var customFinalLogo = ex.concat(customLogoPath);


    if (this.state.newApi.wall.CustomBanner.status === 1) {
      return (

        <div className={this.state.newApi.wall.CustomBanner.banner_position === 1 ? "bannerTop" : "bannerBottom"} id="wBannerImage">
          <div className={`taggboxHeaderBanner banner-${this.state.newApi.wall.CustomBanner.bannerType}`} style={{ height: this.state.newApi.wall.CustomBanner.banner_height, backgroundColor: this.state.newApi.wall.CustomBanner.background_color, backgroundImage: this.state.newApi.wall.CustomBannerImage.newName === 8661481540843.082 ? `url(${defaultFinalPath})` : `url(${customFinalPath})` }}>
            <div className="headBannerContent">

              <div className="headerBannerLeft">
                <div className="headBannerLogo">
                  {this.bannerLogo(customFinalLogo)}
                </div>

              </div>

              {this.middleBanner()}

              <div className="headerbannerRight">
                <ul className="headbannerSocialIcon">

                  {this.bannerSocialIcons()}


                </ul>
              </div>


              <div className="clear"></div>
            </div>
          </div>
        </div>
      )

    }


    else {
      return null;
    }


  }

  bannerFunTop = () => {

    if (this.state.newApi.wall.CustomBanner.status === 1 && this.state.newApi.wall.CustomBanner.banner_position === 1) {
      return (
        this.bannerFun()
      )

    } else {
      return null;
    }

  }

  bannerFunBottom = () => {

    if (this.state.newApi.wall.CustomBanner.status === 1 && this.state.newApi.wall.CustomBanner.banner_position === 2) {
      return (
        this.bannerFun()
      )

    } else {
      return null;
    }

  }

  middleBanner = () => {
    return (
      <>
        <div className="headerBannerMiddle">
          <div className="headBannerHeading">
            <span className={`setFont font${this.state.newApi.wall.CustomBanner.subTitleFontStyle}`} style={{ fontSize: this.state.newApi.wall.CustomBanner.subTitle_font_size, color: this.state.newApi.wall.CustomBanner.subTitle_font_color }}>{this.state.newApi.wall.CustomBanner.subTitle}</span>
            <h1 className={`setFont font${this.state.newApi.wall.CustomBanner.titleFontStyle}`} style={{ fontSize: this.state.newApi.wall.CustomBanner.title_font_size, color: this.state.newApi.wall.CustomBanner.title_font_color }}>{this.state.newApi.wall.CustomBanner.title}</h1>

          </div>

        </div>

      </>
    )

  }

  bannerLogo = (y) => {

    var defaultFinalLogo = "https://app.taggbox.com/uploaded/8651481539701.51210.png";

    if (this.state.newApi.wall.LogoImage.newName === 8651481539701.512) {
      return (

        <img src={defaultFinalLogo} className="img-responsive" style={{ maxWidth: 240, width: "auto", paddingTop: 5, paddingBottom: 5, objectFit: "contain", display: "block" }}></img>

      )

    } else {

      return (

        <img src={y} className="img-responsive" style={{ maxWidth: 240, width: "auto", paddingTop: 5, paddingBottom: 5, objectFit: "contain", }}></img>

      )
    }

  }

  bannerSocialIcons =() => {
    if(this.state.newApi.wall.CustomBanner.social_icon_status === 1){

      if (this.state.newApi.wall.CustomBanner.social_icons === "2,3") {
        return (
          <>
            {this.logoSocialAction2()}

            {this.logoSocialAction3()}
          </>
        )
      }

      else if(this.state.newApi.wall.CustomBanner.social_icons === "1,3") {
        return (
          <>
            {this.logoSocialAction1()}

            {this.logoSocialAction3()}
          </>
        )

      }

      else if(this.state.newApi.wall.CustomBanner.social_icons === "1,2") {
        return (
          <>
            {this.logoSocialAction1()}

            {this.logoSocialAction2()}
          </>
        )

      }

      else if(this.state.newApi.wall.CustomBanner.social_icons === 1){
        return(
          <>
          {this.logoSocialAction1()}
          </>
        )

      }
      
      else if(this.state.newApi.wall.CustomBanner.social_icons === 2){
        return(
          <>
          {this.logoSocialAction2()}
          </>
        )
      }

      else if(this.state.newApi.wall.CustomBanner.social_icons === 3){
        return(
          <>
          {this.logoSocialAction3()}
          </>
        )

      }

      else if(this.state.newApi.wall.CustomBanner.social_icons === "1,2,3"){
      return(
        <>
        {this.logoSocialAction1()}
        {this.logoSocialAction2()}
        {this.logoSocialAction3()}
        </>
      )
      }

    }

    else{
      return null;
    }
  }

  logoSocialAction1 = () => {

    if (this.state.newApi.wall.CustomBanner.social_icon_color_status == 2) {
      return (
        <li className="fb" style={{ borderColor: this.state.newApi.wall.CustomBanner.social_icon_color, height: 15 + this.state.newApi.wall.CustomBanner.social_icon_size, width: 15 + this.state.newApi.wall.CustomBanner.social_icon_size }}>
          <i id="fbicon" className="fa fa-facebook" style={{ fontSize: this.state.newApi.wall.CustomBanner.social_icon_size, color: this.state.newApi.wall.CustomBanner.social_icon_color }}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i>
        </li>
      )
    }

    else {
      return (
        <li className="fb" style={{ borderColor: '#3b5998', height: 15 + this.state.newApi.wall.CustomBanner.social_icon_size, width: 15 + this.state.newApi.wall.CustomBanner.social_icon_size }}>
          <i id="fbicon" className="fa fa-facebook" style={{ fontSize: this.state.newApi.wall.CustomBanner.social_icon_size }}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i>
        </li>
      )

    }

  }

  logoSocialAction2 = () => {
    if(this.state.newApi.wall.CustomBanner.social_icon_color_status == 2){
    return(
      <li className="tw" style={{ borderColor: this.state.newApi.wall.CustomBanner.social_icon_color ,  height: 15 + this.state.newApi.wall.CustomBanner.social_icon_size , width: 15 + this.state.newApi.wall.CustomBanner.social_icon_size }}>
      <i id="twicon" className="fa fa-twitter" style={{ fontSize: this.state.newApi.wall.CustomBanner.social_icon_size ,  color: this.state.newApi.wall.CustomBanner.social_icon_color }}><FontAwesomeIcon  icon={['fab', 'twitter']} /></i>
    </li>
    )}

    else{
      return(
      <li className="tw" style={{ borderColor: '#00aced' ,  height: 15 + this.state.newApi.wall.CustomBanner.social_icon_size , width: 15 + this.state.newApi.wall.CustomBanner.social_icon_size }}>
      <i id="twicon" className="fa fa-twitter" style={{ fontSize: this.state.newApi.wall.CustomBanner.social_icon_size  }}><FontAwesomeIcon icon={['fab', 'twitter']} /></i>
    </li>)
    }
  }

  logoSocialAction3 = () => {
    var a = 15 + this.state.newApi.wall.CustomBanner.social_icon_size;

    if (this.state.newApi.wall.CustomBanner.social_icon_color_status == 2) {

      return (

        <li className="insta" style={{ fontSize: a, borderColor: this.state.newApi.wall.CustomBanner.social_icon_color, height: 15 + this.state.newApi.wall.CustomBanner.social_icon_size, width: 15 + this.state.newApi.wall.CustomBanner.social_icon_size }}>
          <i id="instaicon" className="fa fa-instagram" style={{ fontSize: this.state.newApi.wall.CustomBanner.social_icon_size, color: this.state.newApi.wall.CustomBanner.social_icon_color }}><FontAwesomeIcon icon={['fab', 'instagram']} /></i>
      
        </li>
      )
    }

    else {
      return (

        <li className="insta" style={{ fontSize: a, borderColor: '#cd486b', height: 15 + this.state.newApi.wall.CustomBanner.social_icon_size, width: 15 + this.state.newApi.wall.CustomBanner.social_icon_size }}>
          <i id="instaicon" className="fa fa-instagram" style={{ fontSize: this.state.newApi.wall.CustomBanner.social_icon_size }}><FontAwesomeIcon icon={['fab', 'instagram']} /></i>
        </li>
      )

    }
  }

  mobileCondition = (s) => { 
 
  window.open(s.link, '_blank');
  };

  
  customPostFun = () => {

    var personsCustomPost = Object.keys(this.state.newApi.customPost).map(k => this.state.newApi.customPost[k]);
  
  };

  updateDimensions(){
    console.log('..2')
    console.log(window.document.body.offsetHeight)
    setTimeout(this.bindEvents(window.document.body.offsetHeight), 3000); 
    this.setState({ width: window.innerWidth , heightt: window.document.body.offsetHeight
     
    });
 
  };

  getHeight(element) {
  // if (element && !this.state.elementHeight) { // need to check that we haven't already set the height or we'll create an infinite render loop
  //   this.setState({ elementHeight: element.clientHeight });
// console.log(element)
//   console.log(element.offsetHeight)

  // this.setState({ newHeight: element.offsetHeight});

  }

  onScroll = () => {

  
    var scrollTop = window.pageYOffset
  
    this.setState({ scrollTop });
    if (this.state.persons.length !== 0) {
    
      if (this.hasReachedBottom() && this.state.persons[0].personalization.autoScrollStatus === 1) {
     
        this.showMore();
      }

    }
    else {
    
      if (this.hasReachedBottom() && this.state.persons[0].personalization.autoScrollStatus === 1) {
        return (
          <div>

            {this.ShowmoreCondOne}
          </div>
        )
      }

      else {
        return null;
      }


    }
  };

  errorFun = () => {

    var errorError = {
      '1': '@',
      '2': '#',
      '3': 'List ',
      '4': '@',
      '5': 'Advanced ',
      '6': 'Location ',
      '7': '@',
      '8': 'Page ',
      '9': 'Page ',
      '10': 'Group ',
      '11': 'Playlist ',
      '12': 'Board ',
      '13': 'URL ',
      '14': 'Event ',
      '16': 'Mention ',
      '22': 'Workplace ',
      '23': '@',
      '24': '@',
      '25': '@',
      '26': '#'
    }


    if (this.state.newApi.error_code === 201) {
      return (
        <>
          <h2>No Posts!</h2>
          <p>If Moderation is ON, then the posts might be in the moderation section and you need to approve them by going to MODERATION.</p>
          <p>Else, there might not be any posts on feeds which you have added.</p>
        </>
      )
    }

    else if (this.state.newApi.error_code === 202) {
      return (
        <>
          <h2>No Feeds!</h2>
          <p>It seems you have not added any Feed. Please <a href={`https://app.taggbox.com/wall/index/${this.state.newApi.wall.Wall.id}`} className="create-new-feed">Add</a> Social Networks !</p>

        </>
      )
    }

    else if (this.state.newApi.error_code === 203) {
      return (
        <>
          <h2>Feed Not Activated!</h2>
          <p>It seems you have not actived any Feed. Please Activate feed from your
             <a href={`https://app.taggbox.com/wall/index/${this.state.newApi.wall.Wall.id}`}  className="manage-feed" > wall editor</a>

          </p>
        </>
      )
    }

    else if (this.state.newApi.error_code === 204) {
      return (
        <>
         <h2>Feed Not Authorized!</h2>
			<p>It seems you have not authorized any Feed. Please <a href={`https://app.taggbox.com/wall/index/${this.state.newApi.wall.Wall.id}`} className="manage-feed">Click here</a> to authorize Feed !</p>
        </>
      )
    }

    else if (this.state.newApi.error_code === 205) {
      return (
        <>
          <h2>No {this.state.newApi.post_message}!</h2>
          <p>It seems there are no {this.state.newApi.post_message} available on the entered {errorError[`${this.state.newApi.older_post}`]}{this.state.newApi.older_days}. All Upcoming posts will appear here.</p>
          <p class="tweets-or-section">OR</p>
          <p>You can <a href={`https://app.taggbox.com/wall/index/${this.state.newApi.wall.Wall.id}`} className="create-new-feed">Click here</a> to create another feed.</p>
        </>
      )
    }

    else if (this.state.newApi.error_code === 206) {
      return(
        <>
          <h2>No Tweets!</h2>
          <p>It seems there are no tweets available on the entered {errorError[`${this.state.newApi.older_post}`]}{this.state.newApi.older_days}. All Upcoming tweets will appear here.</p>
          <p className="tweets-or-section">OR</p>
          <p>Tweets are older than {this.state.newApi.tweet_old} days.</p>
        </>
      )

    }
      
    else if (this.state.newApi.error_code === 207) {
      return (
        <>
       <h2>No Posts!</h2>
			<p>It seems your all posts are private. Please go to <a href={`app.taggbox.com/moderation/index/${this.state.newApi.wall.Wall.id}`} target="_blank">Moderation</a> and make some posts public.</p>
        </>
      )
    }

    else if (this.state.newApi.error_code === 208) {
      return (
        <>
          <h2>No Posts!</h2>
          <p>It seems available posts are older than {this.state.newApi.older_days !== 8 ? `${this.state.newApi.older_days} Days` :  moment(new Date(this.state.newApi.older_post * 1000)).format('LL')    }
          {'. '} All new posts will appear here.</p>
        </>
      )
    }

    else if (this.state.newApi.error_code === 209) {
      return (
        <>
          <h2>No Posts!</h2>
          <p>It seems there are no posts with image and video.</p>
        </>
      )
    }

    else if (this.state.newApi.error_code === 211) {
      return (
        <>
          <h2>No Posts!</h2>
          <p>It seems there are no posts available on the entered {errorError[`${this.state.newApi.older_post}`]}{this.state.newApi.older_days}. All Upcoming posts will appear here.</p>
          <p class="tweets-or-section">OR</p>
          <p>Post are older than 24 hours.</p>
        </>
      )
    }

    else if (this.state.newApi.error_code === 212) {
      return (
        <>
          <h2>No Posts!</h2>
          <p>Only newly posted Instagram {this.state.newApi.older_days} will be displayed. Unlike other feed sources, {this.state.newApi.older_days}  posted in the past will not be retrieved.</p>
        </>
      )
    }
   
  
  
  };

  blurFun = () => {
     window.filter = "blur(40px)"  
  }

  hasReachedBottom = () => {

    return (

      (window.innerHeight + window.scrollY) >= document.body.offsetHeight
    );
  }


  popWeb = (carddetail) => {
  
    document.body.style.overflow = "hidden"
    if (window.parentWindow !== undefined) {
      console.log('parent window event :- ' + window.parentWindow);
      var obj = {
        type: 'showPopUp',
        data: {
          
         card: carddetail, 
         family: this.state.filteredPersons,
         idArray: this.state.personArray
        }
        
      }
      
      window.parentWindow.source.postMessage(obj, window.parentWindow.origin);
    }
  }


  bindEvents = (h) => {
    console.log("nayi height" + h)

    window.addEventListener("message", this.onMessageReceived, false);
    window.height = h;

    if (window.parentWindow !== undefined) {
      // console.log('hiiii')
      console.log('parent window event :- ' + window.parentWindow);
      console.log(window.parentWindow)

      if(window.parentWindow.data.type == 'startEmbed' ){
      var obj = {
        type: 'getHeight',
        data: {

          height: h,

          iframe: window.parentWindow.data.id
        }
      }

      if(this.state.loadMess == 1){
       this.setState({loadMess: 0})
        this.showMore()

      }
      window.parentWindow.source.postMessage(obj, window.parentWindow.origin);
    }
    
    if(window.parentWindow.data.type == 'loadMore' ){
      var obj = {
        type: 'getHeight',
        data: {

          height: h,

          iframe: window.parentWindow.data.id
        }
      }
      window.parentWindow.source.postMessage(obj, window.parentWindow.origin);
    }

     
    }
  }

  onMessageReceived = (event) => {

    if (event.data.type == 'startEmbed') {

      window.parentWindow = event;
    
      var obj = {
        type: 'getHeight',
        data: {

          height: event.currentTarget.height,

          iframe: event.data.id
        }
      }

      event.source.postMessage(obj, event.origin);
    }
    else if (event.data.type == 'loadMore' && this.state.newApi.wall.Personalization.autoScrollStatus === 1) {

       this.setState({loadMess: 1})
      window.parentWindow = event;
    
     
      var obj = {
        type: 'getHeight',
        data: {

          height: event.currentTarget.height,

          iframe: event.data.id
        }
      }

      event.source.postMessage(obj, event.origin);

    }

  }
 
  loaderApi = (wallN) => {

    axios
      .get(
        `https://test.taggbox.com/w/getLoader/${wallN}`
      )
      .then(res => {
        var loaderDetails = res.data;
        this.setState({

          loaderType: loaderDetails.loder_type, loaderColorOne: loaderDetails.loader_color1,
          loaderColorTwo: loaderDetails.loader_color2
        })
      });

  };

  cardidArray = (d) => {
  
    var xyz = this.state.personArray.concat(d)

    this.setState({ personArray: xyz }, () => {
   
    });
  }


  componentDidMount() {

    var dummy = window.location.href
    var dummyLen = dummy.length
    var dummyResult = dummy.slice(31, dummyLen);
    var dummyCond = dummyResult.indexOf("/");

    if (dummyCond === -1) {
      var wallN = dummyResult
    } else {
      var wallN = dummy.slice(31, dummyLen - 1);
    }

    this.setState({wallN})
  
    this.updateDimensions();
   
    window.addEventListener("scroll", this.onScroll, false);
    window.addEventListener("resize", this.updateDimensions.bind(this));
   
    this.fetchResults(wallN) 
   
  }



  componentDidUpdate() {
    console.log('..1')
    window.addEventListener("resize", this.updateDimensions.bind(this));
     this.bindEvents(window.document.body.offsetHeight)
   
  }
 
 fetchResults = (wallN) => {
  // console.log(wallN)
  // `https://test.taggbox.com/w/18880?format=json`
  // `https://test.taggbox.com/w/24429?format=json`
  // `https://test.taggbox.com/w/${wallN}?format=json`
  // `https://test.taggbox.com/w/now-playing`
    axios
      .get(
        `https://test.taggbox.com/w/kp?format=json`
      )
      .then(res => {

        var persons = Object.keys(res.data.postData).map(k => res.data.postData[k]);
     
        persons.map((p, key) => {

          var a = p.id
      
          this.cardidArray(a)


        })

        var newApi = res.data;
        var planId = newApi.wall.UserDetail.planId;
      
        // window.addEventListener('resize', this.updateDimensions);
        var postWidth = newApi.wall.Personalization.minimumPostWidth;
       
        var cLanguage = JSON.parse(newApi.wall.Personalization.custom_lan_data);
       
        var customLArray = Object.keys(cLanguage).map(k => cLanguage[k]);

        var transparentTheme49 = "https://opengameart.org/sites/default/files/Transparency500.png"

        if (persons.length > 3 && newApi.wall.Personalization.theme === 16) {
          this.setState({ persons });
        }

        else {

        if (persons.length === 2 && newApi.wall.Personalization.theme === 16) {
          persons = persons.concat(persons);
          this.setState({ persons });
        }

        else if (persons.length === 3 && newApi.wall.Personalization.theme === 16) {
         
          persons = persons.concat(persons[0]);
          this.setState({ persons });
        }

        else if (persons.length === 1 && newApi.wall.Personalization.theme === 16){
          persons = persons.concat(persons).concat(persons).concat(persons);
          this.setState({ persons });
        }

        }

        var postNumber = newApi.wall.ThemeRule.numberOfPosts;
    
        var filterNumber = newApi.wall.Personalization.filter_type;

        if(newApi.wall.Personalization.w_language === "French"){
          this.setState({buttonName: "Montre plus", filterButton: "Tout" , viewOnText: "Vue sur" , shareText: "PARTAGER"})
        }

        else if(newApi.wall.Personalization.w_language === "German" ){
          this.setState({buttonName: "Zeig mehr" , filterButton: "Alle", viewOnText: "Sehen Sie", shareText: "AKTIE"})
        }

        else if (newApi.wall.Personalization.w_language === "Malay" ) {
          this.setState({ buttonName: "Tunjukkan Lagi" , filterButton: "Semua", viewOnText: "Lihat di" , shareText: "BERKONGSI"});
        }
        else if (newApi.wall.Personalization.w_language === "Dutch" ) {
          this.setState({ buttonName: "Laat meer zien" ,  filterButton: "Alle" , viewOnText: "Uitzicht op", shareText: "DELEN"});
        }
        else if (newApi.wall.Personalization.w_language === "Spanish") {
          this.setState({ buttonName: "Mostrar más" , filterButton: "Todas", viewOnText: "Ver en", shareText: "COMPARTIR"});
        }
        else if (newApi.wall.Personalization.w_language === "Chinese") {
    
          this.setState({ buttonName: "展示更多" , filterButton: "分享", viewOnText: "查看", shareText: "所有"});
        }
        else if (newApi.wall.Personalization.w_language === "Korean" ) {
          this.setState({ buttonName: "보기" , filterButton: "모든", viewOnText: "에서보기", shareText: "몫"});
        }
        else if (newApi.wall.Personalization.w_language === "Italian" ) {
          this.setState({ buttonName: "Mostra di più" , filterButton: "Tutti", viewOnText: "Visualizza su", shareText: "CONDIVIDERE"});
        }
        else if (newApi.wall.Personalization.w_language === "Portuguese" ) {
          this.setState({ buttonName: "Mostre mais", filterButton: "Todos", viewOnText: "Ver no" , shareText: "COMPARTILHAR"});
        }

        else if (newApi.wall.Personalization.w_language === "English" || newApi.wall.Personalization.w_language === null)  {
          this.setState({ buttonName: "Show More" , filterButton: "All", viewOnText: "View on", shareText: "SHARE"});
        }

        else if(newApi.wall.Personalization.w_language === "custom" && newApi.wall.Personalization.custom_lan_data !== null) {
        
          this.setState({ buttonName: cLanguage.show_more , filterButton: cLanguage.p_all , viewOnText: cLanguage.view_on, shareText: cLanguage.share});
        }

        if (newApi.wall.Personalization.randomizePost === 1) {
      
          var zersons = persons.slice(0);
          var tersons = zersons.sort(function (a, b) {
            return 0.5 - Math.random()
          }) 
          this.setState({ filteredPersons: tersons })
        }
        
        else {
      
          this.setState({ filteredPersons: persons })
        }

        var jm = newApi.wall.ThemeRule.cardColor;

        var imgPath = "https://taggbox.s3.amazonaws.com/"

        if(newApi.wall.BackgroundImage.path !== null){
        var bgPath = newApi.wall.BackgroundImage.path.concat(newApi.wall.BackgroundImage.newName);
        var finalPath = imgPath.concat(bgPath);
      

        }

        if(newApi.wall.BannerImage.path !== null){
        var bannerPath = newApi.wall.BannerImage.path.concat(newApi.wall.BannerImage.newName);
        var finalBannerPath = imgPath.concat(bannerPath);
     
      }

        var bakcolor = res.data.wall.ThemeRule.backgroundColor;
     
        var wid =  newApi.wall.Personalization.wallId;

        var shmorBack = newApi.wall.ThemeRule.cardColor;

        var shmorFont = newApi.wall.ThemeRule.fontColor;   
      
        var colorIcon = newApi.wall.ThemeRule.iconColor;   

        var padd = newApi.wall.Personalization.padding;
       
        var kpadding = padd
        
        const tstamp = Math.floor(Date.now() / 1000);

        this.setState({
      
          persons, tstamp, wid, kpadding, shmorBack, shmorFont, modalIsOpen: false
          , isLoading: false, newApi, bakcolor,colorIcon, finalPath, jm, finalBannerPath, isMobile, imgPath, filterNumber, postNumber
          , transparentTheme49 , cLanguage ,postWidth ,planId,newApi,customLArray
        });

        
      });

    
  }

  render() {


    var ctrans = `translate3d(0,${this.state.scrollTop},0)`
    
    var cardNumber = (this.state.width - 4) / (this.state.postWidth )
   
    var rowCard = Math.trunc(cardNumber)
    
    var spacing = (this.state.width - 4) % this.state.postWidth 
   
    var adjustSpacing = spacing / rowCard;
    
    if (cardNumber >= 1) {
      var adjustWidth = this.state.postWidth + adjustSpacing;
     
    }
    else {
      var adjustWidth = this.state.postWidth - adjustSpacing;
     
    }

   var errorBg = 'https://cloud.taggbox.com/img/nopost.png'
    
    var colms = <col ms={6} xs={12} />
    const { activeCardId, persons } = this.state;
    const person = activeCardId !== null ? this.state.filteredPersons[activeCardId] : {};
     
 
    return (

      this.state.isLoading ? this.showLoadingScreen() : (
        <>
       
        {this.state.newApi.wall.Personalization.cssStatus === 1 ?
         <style>
           {this.state.newApi.wall.Personalization.css}
         
         </style>
         : ''
        }


          {this.state.newApi.error_code !== 0 ?
            <div className="col-md-12 text-center noPostSec" id="noPosts"
              style={{
                backgroundImage: 'url(' + errorBg + ')'
                , height: this.state.heightt
                ,
                display:
                  this.state.newApi.error_code === 201 ? ''
                    : this.state.newApi.error_code === 202 ? ''
                      : this.state.newApi.error_code === 203 ? ''
                        : this.state.newApi.error_code === 204 ? ''
                          : this.state.newApi.error_code === 205 ? ''
                            : this.state.newApi.error_code === 206 ? ''
                              : this.state.newApi.error_code === 207 ? ''
                                : this.state.newApi.error_code === 208 ? ''
                                  : this.state.newApi.error_code === 209 ? ''
                                    : this.state.newApi.error_code === 211 ? ''
                                      : this.state.newApi.error_code === 212 ? ''
                                        : 'none'
              }}  >


              <div className="noPostContent">
                <div className="noPostMsgBlock" >

                  {this.errorFun()}

                </div>

              </div>

            </div>

            : ''
          }
        <div className = {this.state.newApi.wall.Personalization.theme === 49 ? 'widgetTheme_customized' : '' }
      
        >

          <div ref={this.getHeight} className={ `scrlBarComan themesWrapper ${this.state.newApi.wall.Personalization.theme === 49 ? 'col-md-4 offset-md-4':''} themeStart${this.state.newApi.wall.Personalization.theme} themeType${this.state.newApi.wall.Personalization.themeType}  ${this.state.newApi.wall.UserDetail.planId === 42 ? `theme${this.state.newApi.wall.Personalization.theme}_poweredByMain` : ''}`}
      
           style={{
         
            backgroundImage: this.state.newApi.wall.BackgroundImage.path !== null && this.state.newApi.wall.ThemeRule.transparent === 0 ? 'url(' +this.state.finalPath +')' : null,
            backgroundColor:  this.state.newApi.wall.ThemeRule.transparent === 0 ? this.state.newApi.wall.ThemeRule.backgroundColor :  "white",
            backgroundRepeat: "no-repeat", backgroundSize: "cover",
            overflow: this.state.newApi.wall.Personalization.theme !== 49 ? 'hidden'   : '',
             outline: "none",
            marginTop: this.state.newApi.wall.Personalization.theme === 49 && this.state.isMobile === false ? (this.state.heightt-500)/2
            :this.state.newApi.wall.Personalization.theme === 49 && this.state.isMobile === true ? 0
            : 0  ,
            backgroundAttachment: 'fixed' ,
        
             
              display: (this.state.newApi.error_code === 203 || this.state.newApi.error_code === 207 || this.state.newApi.error_code === 201
                || this.state.newApi.error_code === 202 || this.state.newApi.error_code === 204 || this.state.newApi.error_code === 205
                || this.state.newApi.error_code === 206 || this.state.newApi.error_code === 208 || this.state.newApi.error_code === 209
                || this.state.newApi.error_code === 211 || this.state.newApi.error_code === 212)
                 ? 'none' : ''
          }}   

          >
       {/* <Scrollbar
           damping={0.1}
           thumbMinSize={10}
          //  syncCallbacks={boolean}
           renderByPixels={true}
           alwaysShowTracks={false}
           continuousScrolling={true}
          //  wheelEventTarget={null}
          //  plugins={object}
          //  onScroll={func}
       > */}
            <div className="scroll-content" >
          

         
              {this.bannerImageLogic()}
              {this.bannerFunTop()}

              <div>{this.webFilter()} </div>
              {this.state.newApi.wall.Personalization.theme === 20 || this.state.newApi.wall.Personalization.theme === 5 || this.state.newApi.wall.Personalization.theme === 19 || this.state.newApi.wall.Personalization.theme === 3 ?

                <div className={this.state.newApi.wall.Personalization.theme === 5 ? 'themeClassicCard'
                  : this.state.newApi.wall.Personalization.theme === 20 ? 'themeModernCard'
                    : this.state.newApi.wall.Personalization.theme === 19 ? 'themeNewsCard'
                      : ''
                      
                }>
 
                    <MasonryTheme
                      postWidth={this.state.postWidth}
                      width={this.state.width}
                      dataFromParent={this.state.filteredPersons}
                      activeCardId={this.state.activeCardId}
                      shmorBack={this.state.shmorBack}
                      isMobile={this.state.isMobile}
                      newApi={this.state.newApi}
                      shmorFont = {this.state.shmorFont}
                      loaderFilter={this.state.loaderFilter}
                      authorDetails={this.authorDetails}
                      networkCard={this.networkCard}
                      actionCTA={this.actionCTA}
                      fontFamUpper={this.fontFamUpper}
                      fontFam={this.fontFam}
                      socialActions={this.socialActions}
                      shareWrapperTheme49={this.shareWrapperTheme49}
                      PopupOnOff={this.PopupOnOff}
                      mobileCondition={this.mobileCondition}
                      toggleCard={this.toggleCard}
                      openModal={this.openModal}
                 
                      bannerFunBottom={this.bannerFunBottom}
                      optionsfontFamUpper={this.optionsfontFamUpper}
                      shareOptions={this.shareOptions}
                      ShowmoreCond={this.ShowmoreCond}
                      ShowmoreCondOne={this.ShowmoreCondOne}
                      persons={this.state.persons}
                      hasReachedBottom={this.hasReachedBottom}
                      heightt={this.state.heightt}
                      handleKeyPress={this.handleKeyPress}
                      filteredPersons={this.state.filteredPersons}
                      people={this.state.people}
                      postNumber={this.state.postNumber}
                      popWeb={this.popWeb}
                      bindEvents={this.bindEvents}
                    ></MasonryTheme>
              
            </div>
 : 

 this.state.newApi.wall.Personalization.theme === 16 ? 
 //  --------------------------------------------------------------Theme 16-------------------------

                    <HorizontalsliderTheme

                      heightt={this.state.heightt}
                      dataFromParent={this.state.filteredPersons}
                      activeCardId={this.state.activeCardId}
                      shmorBack={this.state.shmorBack}
                      shmorFont={this.state.shmorFont}
                      isMobile={this.state.isMobile}
                      newApi={this.state.newApi}
                      authorDetails={this.authorDetails}
                      networkCard={this.networkCard}
                      actionCTA={this.actionCTA}
                      fontFamUpper={this.fontFamUpper}
                      fontFam={this.fontFam}
                      socialActions={this.socialActions}
                      shareWrapperTheme49={this.shareWrapperTheme49}
                      PopupOnOff={this.PopupOnOff}
                      mobileCondition={this.mobileCondition}
                      toggleCard={this.toggleCard}
                      openModal={this.openModal}
                
                      bannerFunBottom={this.bannerFunBottom}>

                    </HorizontalsliderTheme>
                 
 :

 this.state.newApi.wall.Personalization.theme === 47 ? 
//  --------------------------------------------------------------Theme 47-------------------------

                      <HorizontalcolumnTheme

                        dataFromParent={this.state.filteredPersons}
                        activeCardId={this.state.activeCardId}
                        isMobile={this.state.isMobile}
                        newApi={this.state.newApi}
                        shmorBack={this.state.shmorBack}
                        shmorFont={this.state.shmorFont}
                        authorDetails={this.authorDetails}
                        networkCard={this.networkCard}
                        actionCTA={this.actionCTA}
                        fontFamUpper={this.fontFamUpper}
                        fontFam={this.fontFam}
                        socialActions={this.socialActions}
                        shareWrapperTheme49={this.shareWrapperTheme49}
                        PopupOnOff={this.PopupOnOff}
                        mobileCondition={this.mobileCondition}
                        toggleCard={this.toggleCard}
                        openModal={this.openModal}
                       
                        bannerFunBottom={this.bannerFunBottom}>



                        ></HorizontalcolumnTheme>

 :

  this.state.newApi.wall.Personalization.theme === 4 ?
//  --------------------------------------------------------------Theme 4-------------------------

                        <SquarephotoTheme
                          postWidth={this.state.postWidth}
                          width={this.state.width}
                          dataFromParent={this.state.filteredPersons}
                          activeCardId={this.state.activeCardId}
                          isMobile={this.state.isMobile}
                          newApi={this.state.newApi}
                          bakcolor={this.state.bakcolor}
                          shmorFont={this.state.shmorFont}
                          authorDetails={this.authorDetails}
                          networkCard={this.networkCard}
                          actionCTA={this.actionCTA}
                          fontFamUpper={this.fontFamUpper}
                          fontFam={this.fontFam}
                          socialActions={this.socialActions}
                          shareWrapperTheme49={this.shareWrapperTheme49}
                          PopupOnOff={this.PopupOnOff}
                          mobileCondition={this.mobileCondition}
                          toggleCard={this.toggleCard}
                          openModal={this.openModal}
                        
                          bannerFunBottom={this.bannerFunBottom}
                          shareOptions={this.shareOptions}
                          ShowmoreCond={this.ShowmoreCond}

                        ></SquarephotoTheme>

: this.state.newApi.wall.Personalization.theme === 49 ?
//  --------------------------------------------------------------Theme 49-------------------------

                          <WidgetTheme
                            dataFromParent={this.state.filteredPersons}
                            activeCardId={this.state.activeCardId}
                            isMobile={this.state.isMobile}
                            newApi={this.state.newApi}
                            authorDetails={this.authorDetails}
                            networkCard={this.networkCard}
                            actionCTA={this.actionCTA}
                            fontFamUpper={this.fontFamUpper}
                            fontFam={this.fontFam}
                            socialActions={this.socialActions}
                            shareWrapperTheme49={this.shareWrapperTheme49}
                            PopupOnOff={this.PopupOnOff}
                            mobileCondition={this.mobileCondition}
                            toggleCard={this.toggleCard}
                            openModal={this.openModal}
                          
                            bannerFunBottom={this.bannerFunBottom}
                            ShowmoreCond={this.ShowmoreCond}
                            shmorBack={this.state.shmorBack}
                          >

                          </WidgetTheme>
:
this.state.newApi.wall.Personalization.theme === 50 ?
//  --------------------------------------------------------------Theme 4-------------------------

                      <GallerySquareTheme
                        postWidth={this.state.postWidth}
                        width={this.state.width}
                        dataFromParent={this.state.filteredPersons}
                        activeCardId={this.state.activeCardId}
                        isMobile={this.state.isMobile}
                        newApi={this.state.newApi}
                        bakcolor={this.state.bakcolor}
                        shmorFont={this.state.shmorFont}
                        authorDetails={this.authorDetails}
                        networkCard={this.networkCard}
                        actionCTA={this.actionCTA}
                        fontFamUpper={this.fontFamUpper}
                        fontFam={this.fontFam}
                        socialActions={this.socialActions}
                        shareWrapperTheme49={this.shareWrapperTheme49}
                        PopupOnOff={this.PopupOnOff}
                        mobileCondition={this.mobileCondition}
                        toggleCard={this.toggleCard}
                        openModal={this.openModal}
                        displayIndex={this.displayIndex}
                        bannerFunBottom={this.bannerFunBottom}
                        shareOptions={this.shareOptions}
                        ShowmoreCond={this.ShowmoreCond}
                        persons={this.state.persons}
                        hasReachedBottom={this.hasReachedBottom}
                        people={this.state.people}

                      ></GallerySquareTheme>





: 
<div>error</div>

}
</div>

 {/* </Scrollbar> */}
          </div>
        
       </div>  
       
       {this.PopupOnOff(person)}
       
        </>


      ))

  };
}


export default App;

