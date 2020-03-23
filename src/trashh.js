import React from 'react';
import ReactDOM from 'react-dom';
import Scrollbar from 'react-smooth-scrollbar';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import BottomScrollListener from 'react-bottom-scroll-listener'

import DivSize from './main.js'
SmoothScrollbar.use(OverscrollPlugin);




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          height: 0
        }
      }

    componentDidMount() {
    const height = this.divElement.clientHeight;
    this.setState({ height });

    const { scrollbar } = this.$container;
		//console.log( scrollbar );
		scrollbar.addListener((status) => {

            const boxSize = this.boxSize.clientHeight;

            const totalHeight = boxSize+status.offset.y;

            console.log(boxSize+status.offset.y)

            if(totalHeight==height){
           // alert('Now scrollbar issue solved')
            }

		});
    }
    
    render() {
        return (

            <div className="scrolling"
            ref={ (boxSize) => { this.boxSize = boxSize } }
            >
           <Scrollbar 
           
            damping={0.1}
           thumbMinSize={100}
            effect = {'bounce'}
           renderByPixels={true}
           alwaysShowTracks={true}
           continuousScrolling={true}

           id={'scroll'}
            ref={c => this.$container = c}
            >
                <ul className="test"
                ref={ (divElement) => { this.divElement = divElement } }
                >
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                </ul>
                
            </Scrollbar> 
            </div>
            
        );
    }
}

export default App