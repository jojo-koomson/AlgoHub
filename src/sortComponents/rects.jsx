import React, {Component} from 'react';
import Rect from "./rect";
import FlipMove from 'react-flip-move';

class Rects extends Component {
    
    render() {
        
        let margin = 5;
        if( this.props.rects.length>50 ){
            margin=1;
        }
        const styles={
            color:"#fea"
        }
        return (
            <div>
                <FlipMove
                    className="d-flex justify-content-center align-items-end"
                    duration={this.props.speed}
                    // easing="cubic-bezier(.12,.36,.14,1.2)"
                >
                {this.props.rects.map( (rect,rectidx)=>{
                    return (
                        <Rect
                            marg={margin}
                            key={rect.kk}
                            rect={rect}
                        />
                    );
                } )}
                </FlipMove>

                <br></br>
                
                {/* <div>
                    <h2  style={{
                        color:"#444", 
                        backgroundColor:"#ddd",
                        padding:"10px",
                        textAlign:"center",
                        marginTop:"50px"
                        }}>THEORY - SORTING ALGORITHM</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur aut quisquam vitae est pariatur quae iure aliquam, 
                    numquam debitis, soluta, ea modi perferendis iusto eos ipsa officia 
                    itaque rem unde perspiciatis atque magni natus enim dolorem. Facilis 
                    quas mollitia incidunt cumque, in inventore sit 
                    sed repellendus ipsum quibusdam delectus minima!
                    </p>
                </div> */}
            </div>
        );
    }
}

export default Rects;