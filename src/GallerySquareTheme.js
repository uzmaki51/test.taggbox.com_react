import React from 'react';

// include styles
import 'rodal/lib/rodal.css';
//   import "./square-photo.css";
import "./custom-modal.css";
import "./ugc-pro-modal.css";
import "./gallery-square-photo.css"

class GallerySquareTheme extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        col4: [],
        tr: [] ,
        ppl: [4] , 
       total: [0],
       pplfive: [5],
       pplthree: [3],
       ppltwo: [2]
    }
  };



    totalCards = () => {

        var ln = this.state.ppl.length
        console.log(this.state.ppl)
        console.log("lengthhhhhhhhhhhhhhhhhhhhhhhhhhhh -- " + this.state.ppl.length)
        console.log(this.state.ppl[ln - 1])

        var lashhArr = this.state.ppl
     

        for (var i = 0; i < this.props.dataFromParent.length; i++) {
          
            if (this.props.newApi.wall.Personalization.columnCount === 4) {

                var lashhArr = this.state.ppl
                var lastln = this.state.ppl[i]

                if (i % 2 == 0) {
                    var num = lastln + 5;
                    lashhArr.push(num)
                    console.log(lashhArr)
                }

                else {
                    var num = lastln + 4;
                    lashhArr.push(num)
                    console.log(lashhArr)
                }
            }

            else if(this.props.newApi.wall.Personalization.columnCount === 5) {
               
                var lashhArr = this.state.pplfive
                var lastln = this.state.pplfive[i]
             
                if (i % 2 == 0) {
                    var num = lastln + 7;
                    console.log(num)
                    lashhArr.push(num)
                    console.log(lashhArr)
                }

                else {
                    var num = lastln + 5;
                    lashhArr.push(num)
                    console.log(lashhArr)
                }
            }

            else if(this.props.newApi.wall.Personalization.columnCount === 3) {

                var lashhArr = this.state.pplthree
                var lastln = this.state.pplthree[i]
                console.log(lastln)

                if (i % 2 == 0) {
                    var num = lastln + 3;
                    console.log(num)
                    lashhArr.push(num)
                    console.log(lashhArr)
                }

                else {
                    var num = lastln + 3;
                    lashhArr.push(num)
                    console.log(lashhArr)
                }

            }

            else if(this.props.newApi.wall.Personalization.columnCount === 2) {

                var lashhArr = this.state.ppltwo
                var lastln = this.state.ppltwo[i]
                console.log(lastln)

                if (i % 2 == 0) {
                    var num = lastln + 1;
                    console.log(num)
                    lashhArr.push(num)
                    console.log(lashhArr)
                }

                else {
                    var num = lastln + 2;
                    lashhArr.push(num)
                    console.log(lashhArr)
                }

            }

        }
       console.log(lashhArr)

       this.finalDestination(lashhArr)
    }

    finalDestination = (p) => {
        console.log(p)
        var ll = this.props.dataFromParent.length
        console.log(ll)

        let number = p.reverse().find(e => e <= ll)
        console.log(number);

        var n = this.props.dataFromParent.length

        if (p.indexOf(n) !== -1) {
            console.log("all good")
        } else {
            console.log("not good")
            console.log("original " + this.props.dataFromParent.length)
            this.props.dataFromParent.length = number
            console.log("new " + this.props.dataFromParent.length)
        }
    }

    kp = () => {
        console.log("kpokppp" + this.props.dataFromParent.length)
        var arr = []
        if (this.props.newApi.wall.Personalization.columnCount === 4) {
            for (var i = 0; i < this.props.dataFromParent.length; i++) {
                var ans = 4 + (9 * i)
                arr.push(ans);
                this.setDelay(arr);

            }
        }

        else if (this.props.newApi.wall.Personalization.columnCount === 5) {
            for (var i = 0; i < this.props.dataFromParent.length; i++) {
                var ans = 5 + (12 * i)
                arr.push(ans);
                this.setDelay(arr);
            }
        }

        else if (this.props.newApi.wall.Personalization.columnCount === 3) {
            for (var i = 0; i < this.props.dataFromParent.length; i++) {
                var ans = 3 + (6 * i)
                arr.push(ans);
                this.setDelay(arr);
            }
        }
        else if (this.props.newApi.wall.Personalization.columnCount === 2) {
            for (var i = 0; i < this.props.dataFromParent.length; i++) {
                var ans = 2 + (3 * i)
                arr.push(ans);
                this.setDelay(arr);
            }
        }



    }


     setDelay = (arr) => {

        setTimeout(function(){
          console.log(arr);
        }, 1000);

       this.setState({ tr: arr })
       console.log(this.state.tr)
      }

  


    componentDidMount = () => {
        this.kp()
        this.totalCards()
    }

  render() {
 
    var p = this.state.col4
    console.log(p)
    var ua = window.navigator.platform
 
    const person = this.props.activeCardId !== null ? this.props.dataFromParent[this.props.activeCardId] : {};

    console.log(this.props.width)
    console.log(this.props.newApi.wall.Personalization.columnCount)
    if (ua === "Win32") {
      console.log("ie")
      var cardWid = (this.props.width) / (this.props.newApi.wall.Personalization.columnCount)
  
    }
    else {
      console.log("Not ie")
      var cardWid = (this.props.width) / (this.props.newApi.wall.Personalization.columnCount)
     
    }

    var rowCard = Math.trunc(cardWid)
  
    if (ua === "Win32") {
      var spacing = (this.props.width) % this.props.newApi.wall.Personalization.columnCount
  
      var adjustSpacing = spacing / rowCard;
    
    }

    else {
      var spacing = (this.props.width) % this.props.newApi.wall.Personalization.columnCount

      var adjustSpacing = spacing / rowCard;
    

    }


    return (
      <>
        <div className="themeGallerySquarePhoto">

          {

            <a href="https://taggbox.com/" target="_blank"
              style={{ display: this.props.newApi.wall.UserDetail.planId === 42 && this.props.newApi.wall.Personalization.filterStatus !== 1 ? '' : 'none' }}>

              <div className="theme50_poweredBy">
                <span style={{ color: this.props.shmorFont, borderRadius: 4, fontWeight: 800, "border": "1px solid", borderColor: 'white', backgroundColor: "#151515" }} >

                  <img src="https://app.taggbox.com/img/powered_by/taggbox-icon-PoweredBy.png" width="28" /> Powered by taggbox
                  </span>

              </div>
            </a>
          }




          <div id="wPosts" className="theme50 " style={{ position: "relative", height: "inherit", }}>


            {this.props.dataFromParent.map((person, key) => {
             console.log(key)
            //  console.log(this.state.tr)
            //  console.log(this.state.tr.indexOf(key))

             var match = this.state.tr.indexOf(key)
              let video;
          
           
              var highlite = this.props.newApi.wall.Personalization.columnCount 

              if ((person.type === 2) || (person.type === 4)) {
                // console.log("onlyImage");
                video = (

                  <div className="image">

                    <div className="blur-bg"

                      style={{ backgroundImage: 'url(' + person.postFileNew1 + ')' }}
                      alt="" effect="blur" ></div>


                  </div>)
              }


              else if (person.type === 1) {
                // console.log("onlyTextCard");
              }


              else if ((person.type === 3) || (person.type === 5)) {
                // console.log("video file")
                video = (<div className="image" >

                  <div className="blur-bg" style={{ backgroundImage: 'url(' + person.postFileNew1 + ')' }} alt="" effect="blur"></div>
                  <div className="videoIcon">  <img src="https://app.taggbox.com/img/play.png" alt="" />  </div>

                </div>)
              }


              return (<>


                <div id={`"postId${person.id}`} className={`feedId${person.feedId} postItem item flatCard col-ms-6 col-xs-12 ${person.network.description}Taggbox ${person.theme48.class1 === 'onlyTextCard' ? 'onlyTextCard' : ''} completeFadeIn autoBold appliedchLimit `} data-post-id={person.id} data-highlight={person.highlight} data-pin={person.pin}
                  style={{ padding: person.personalization.padding / 2, margin: 0, 
                  width: match !== -1 ? cardWid * 2 : cardWid
            
                   ,minWidth: 'auto',
                    height: match !== -1 ? cardWid * 2 : cardWid
                   
                    , left: 0, top: 0 }} data-created={person.createdAt}   >
                  <div className="post" style={{ backgroundColor: person.font.cardColor }}>

                    <div className="postContent"

                      onClick={() => { this.props.isMobile ? this.props.mobileCondition(person) : this.props.toggleCard(key, person); this.props.openModal(); this.props.displayIndex(key) }}>

                      {video}
                      <div className="image_overlay_black"></div>
                      {this.props.networkCard(person)}
                      <div className="postContentCard" >

                          <div className="postContentCard_innerDiv">
                                  <h4 margin-top="0px">


                                      {this.props.authorDetails(person)}


                                  </h4>

                        <div className="rating" style={{ display: person.network.name === "Yelp" ? "" : "none" }}>

                          <img src={`https://app.taggbox.com/img/rating/${person.rating}.png`}></img>
                        </div>


                        {this.props.fontFam(person)}

                      
</div>

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

        <div className={`col-md-12 text-center loadMoreWrapper loadmorebtn${this.props.newApi.wall.Personalization.theme} loadmoreThemetype${this.props.newApi.wall.Personalization.themeType}`} style={{ position: "absolute", display: this.props.newApi.wall.Personalization.autoScrollStatus === 0 ? "block" : "none" }} >


<div className="appendLoader" style={{ marginBottom: 30, display: this.props.loaderFilter === true ? '' : 'none' }}>
  <img src="https://app.taggbox.com/image/loader.svg" width="30"></img>
</div>



{this.props.ShowmoreCond()}

</div>

<div className="col-md-12 text-center loadMoreWrapper loadmoreThemetype1" id="wNoMorePosts" 
              
              style={{ display: this.props.newApi.wall.Personalization.autoScrollStatus === 0 ? 'none' : 'block' }}>

               {/* <a class="loadMoreBtn" > No More Posts</a>  */}

               <a class="loadMoreBtn"  style={{backgroundColor: this.props.shmorBack , border: '1 solid', borderColor: this.props.shmorFont === "#ffffff" ? 'black' : this.props.shmorFont, 
               color: (this.props.shmorFont === "#ffffff" && this.props.newApi.wall.Personalization.theme === 4) ? 'black' :this.props.shmorFont      
              }}>
               {
         //when we have more cards to show than the actual requirements
            ((this.props.dataFromParent.length === this.props.persons.length) && (this.props.people.length === 0) && (this.props.hasReachedBottom)) ? '' :
            ((this.props.dataFromParent.length > this.props.persons.length) && (this.props.people.length === this.props.persons.length) && (this.props.hasReachedBottom)) ? ''  :
            ((this.props.dataFromParent.length > this.props.persons.length) && (this.props.people.length < this.props.persons.length) && (this.props.hasReachedBottom)) ? 'No More Posts':
            ((this.props.dataFromParent.length > this.props.persons.length) && (this.props.people.length === 0) && (this.props.hasReachedBottom)) ? 'No More Posts': 
            
            //when we have less cards to show than the actual requirements
        
            ((this.props.dataFromParent.length < this.props.newApi.wall.ThemeRule.numberOfPosts) && (this.props.people.length === 0)) ? 'No More Posts' :
            
             //when we have exactly the same cards to show than the actual requirements
            
            ''
                 }</a>  

              </div>   


      </>


    )
  }
}

export default GallerySquareTheme;